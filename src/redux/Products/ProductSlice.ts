import { createSlice } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../store";
import axios from "axios";

import { ProductsProps } from "../../pages/Home/Home";
import { URL_HOST_PROD } from "../../lib/utils";


export interface ProductSliceState {
  list: ProductsProps[];
}
/* INITIAL STATE */
const initialState: ProductSliceState = {
  list: [],
};
/* INITIAL STATE */

/* PARAMETERS STATE SLICE */
export const ProductSliceReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    getAll: (state, action) => {
      state.list = action.payload;
    },
  },
});
/* PARAMETERS STATE SLICE */

export const { getAll } = ProductSliceReducer.actions;

/* SELECTOR */
export const getProducts = (state: RootState) => state.products.list;
/* SELECTOR */

/* ACTIONS FUNCTIONS */
export const getAllProduct = (): AppThunk => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${URL_HOST_PROD}/api/v1/products`);

    dispatch(getAll(response.data));
  } catch (error) {
    console.log(error);
  }
};



/* ACTIONS FUNCTIONS */

export default ProductSliceReducer.reducer;
