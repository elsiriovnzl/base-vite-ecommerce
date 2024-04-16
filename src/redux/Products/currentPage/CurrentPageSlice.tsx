import { createSlice } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../../store";

export interface SiderBarMenuState {
  currentPage: string | null;
}
/* INITIAL STATE */
const initialState: SiderBarMenuState = {
  currentPage: "/" || localStorage.getItem("currentPage"),
};
/* INITIAL STATE */

/* PARAMETERS STATE SLICE */
export const SiderBarMenuReducer = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {
    addPostCurrentPage: (state, action) => {
      localStorage.setItem("currentPage", action.payload);

      state.currentPage = localStorage.getItem("currentPage");
    },
  },
});
/* PARAMETERS STATE SLICE */

export const { addPostCurrentPage } = SiderBarMenuReducer.actions;

/* SELECTOR */
export const currentPageActive = (state: RootState) => state.page.currentPage;
/* SELECTOR */

/* ACTIONS FUNCTIONS */
export const postCurrentPage =
  (currentPage: string): AppThunk =>
  (dispatch, getState) => {
    dispatch(addPostCurrentPage(currentPage));
  };
/* ACTIONS FUNCTIONS */

export default SiderBarMenuReducer.reducer;
