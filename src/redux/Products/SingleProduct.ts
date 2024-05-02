import { createSlice } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../store";
import axios from "axios";
import { URL_HOST_PROD, URL_HOST_DEV } from "../../lib/utils";

/* INITIAL STATE */
const initialState = {
  Product: {
    products_id: 0,
    products_tiltle: "",
    products_description: "",
    product_category: "",
    products_total: 9,
    stock: 0,
    brand_name: "",
    product_rating: 0,
    color_id: 0,
    colors_name: "",
    product_size: "",
    products_img1: "",
    products_img2: "",
    products_img3: "",
    products_img4: "",
    categories_name: "",
    product_iva: 0,
    quantity: 0,
  },
};
/* INITIAL STATE */

/* PARAMETERS STATE SLICE */
export const SingleProductSliceReducer = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {
    getSingleProduct: (state, action) => {
      state.Product = action.payload;
    },
  },
});
/* PARAMETERS STATE SLICE */

export const { getSingleProduct } = SingleProductSliceReducer.actions;

/* SELECTOR */
export const singleProduct = (state: RootState) => state.singleProduct.Product;
/* SELECTOR */

/* ACTIONS FUNCTIONS */
export const getOneProduct =
  (id: string): AppThunk =>
  async (dispatch, getState) => {
    try {
      const response = await axios.post(`${URL_HOST_DEV}/api/v1/products`, {
        singleProductId: id,
      });

      dispatch(getSingleProduct(response.data[0]));
    } catch (error) {
      console.log(error);
    }
  };

/* ACTIONS FUNCTIONS */

export default SingleProductSliceReducer.reducer;
