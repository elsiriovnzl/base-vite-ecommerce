import { createSlice } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../../store";
import { Auth, AuthResponse } from "./models/type";
import { URL_HOST_DEV } from "../../../lib/utils";
import axios from "axios";

export interface AuthSliceState {
  auth: AuthResponse;
  loading: boolean;
  error: boolean;
}
/* INITIAL STATE */
const initialState: AuthSliceState = {
  auth: {
    user: {
      phone: "",
      dni: "",
      name: "",
      username: "",
      rif: "",
      address: "",
      email: "",
    },
    token: "",
    isLogged:false
  },
  loading: false,
  error: false,
};
/* INITIAL STATE */

/* PARAMETERS STATE SLICE */
export const AuthSliceReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.loading = false;
      state.auth = { user: action.payload.user, token: action.payload.token, isLogged:true };
      localStorage.setItem("token", JSON.stringify(state.auth.token));
    },
    logout(state) {
      state.auth = {
        user: {
          phone: "",
          dni: "",
          name: "",
          username: "",
          rif: "",
          address: "",
          email: "",
        },
        token: "",
        isLogged:false
      };

      localStorage.removeItem("token");
    },
    loading(state) {
      state.loading = true;
    },
    error(state) {
      state.loading = false;
      state.error = true;
    },
  },
});
/* PARAMETERS STATE SLICE */

export const { login, logout, loading, error } = AuthSliceReducer.actions;

/* SELECTOR */
export const user = (state: RootState) => state.auth.auth.user;
export const userIsLogged = (state: RootState) => state.auth.auth.isLogged;
export const token = (state: RootState) => state.auth.auth.token;
/* SELECTOR */

/* ACTIONS FUNCTIONS */

export const loginUser =
  ({ username, password }: Auth): AppThunk =>
  async (dispatch, getState) => {
    try {
      dispatch(loading());

      const res = await axios.post(`${URL_HOST_DEV}/api/v1/Auth/login`, {
        username,
        password,
      });

      dispatch(
        login({ user: res.data.userWithoutPassword, token: res.data.token })
      );
    } catch (error) {
      console.log(error);
      dispatch(error());
    }
  };
export const LogoutUser = (): AppThunk => async (dispatch, getState) => {
  try {
    dispatch(loading());

    dispatch(logout());
  } catch (error) {
    console.log(error);
    dispatch(error());
  }
};

/* ACTIONS FUNCTIONS */

export default AuthSliceReducer.reducer;
