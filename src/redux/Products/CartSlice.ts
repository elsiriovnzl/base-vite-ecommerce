import { createSlice } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../store";

import { ProductsProps } from "../../pages/Home";

export const URL_HOST = "https://panel-admin-base-production.up.railway.app";

export interface CartSliceState {
  list: ProductsProps[];
}
/* INITIAL STATE */
const initialState: CartSliceState = {
  list: [],
};
/* INITIAL STATE */

/* PARAMETERS STATE SLICE */
export const CartSliceReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addSingleProduct: (state, action) => {
      if (
        !state.list.some((p) => p.products_id === action.payload.idProduct)
      ) {
        state.list = [...state.list, { ...action.payload, quantity: action.payload.quantity }];
      }
      localStorage.setItem("product", JSON.stringify(state.list));
    },
    addProductInCart: (state, action) => {
      if (
        !state.list.some((p) => p.products_id === action.payload.products_id)
      ) {
        state.list = [...state.list, { ...action.payload, quantity: 1 }];
      } else {
        state.list = state.list.map((p) => {
          if (p.products_id === action.payload.products_id) {
            return { ...p, quantity: (p.quantity ?? 0) + 1 };
          }
          return p;
        });
      }
      localStorage.setItem("product", JSON.stringify(state.list));
    },
    addOneProduct: (state, action) => {
      state.list = state.list.map((p) => {
        if (p.products_id === action.payload && p.quantity) {
          return { ...p, quantity: p.quantity + 1 };
        }
        return p;
      });
    },

    viewProductsInCart: (state) => {
      const produtLocalStorage = localStorage.getItem("product");
      if (produtLocalStorage) {
        state.list = JSON.parse(produtLocalStorage);
      } else {
        state.list;
      }
    },
    deleteOneProductsInCart: (state, action) => {
      state.list = state.list.filter(
        (prod) => prod.products_id !== action.payload
      );
      localStorage.setItem("product", JSON.stringify(state.list));
    },
    deleteOneProduct: (state, action) => {
      const findQuantity = state.list.find(
        (p) => p.products_id === action.payload
      );

      if (findQuantity?.quantity && findQuantity?.quantity > 1) {
        state.list = state.list.map((p) => {
          if (
            p.quantity &&
            p.products_id === action.payload &&
            p.quantity > 1
          ) {
            return { ...p, quantity: p.quantity - 1 };
          }

          return p;
        });
      } else {
        state.list = state.list.filter(
          (pro) => pro.products_id !== action.payload
        );
      }
      localStorage.setItem("product", JSON.stringify(state.list));
    },
  },
});
/* PARAMETERS STATE SLICE */

export const {
  addProductInCart,
  addOneProduct,
  addSingleProduct,
  viewProductsInCart,
  deleteOneProductsInCart,
  deleteOneProduct,
} = CartSliceReducer.actions;

/* SELECTOR */
export const cart = (state: RootState) => state.cart.list;
/* SELECTOR */

/* ACTIONS FUNCTIONS */
export const postProductInCart =
  (product: ProductsProps): AppThunk =>
  async (dispatch, getState) => {
    try {
      dispatch(addProductInCart(product));
    } catch (error) {
      console.log(error);
    }
  };

export const getProductsInCart = (): AppThunk => async (dispatch, getState) => {
  try {
    dispatch(viewProductsInCart());
  } catch (error) {
    console.log(error);
  }
};
export const deleteOne =
  (idProduct: number): AppThunk =>
  async (dispatch, getState) => {
    try {
      dispatch(deleteOneProductsInCart(idProduct));
    } catch (error) {
      console.log(error);
    }
  };
  export const addOneSingle =
  (idProduct: string, quantity: number): AppThunk =>
  async (dispatch, getState) => {
    try {
      dispatch(addSingleProduct({idProduct, quantity} ));
    } catch (error) {
      console.log(error);
    }
  };
export const addOne =
  (idProduct: number): AppThunk =>
  async (dispatch, getState) => {
    try {
      dispatch(addOneProduct(idProduct));
    } catch (error) {
      console.log(error);
    }
  };
export const decrementOne =
  (idProduct: number): AppThunk =>
  async (dispatch, getState) => {
    try {
      dispatch(deleteOneProduct(idProduct));
    } catch (error) {
      console.log(error);
    }
  };

/* ACTIONS FUNCTIONS */

export default CartSliceReducer.reducer;
