import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import  ProductSliceReducer  from './redux/Products/ProductSlice';
import  CartSliceReducer  from './redux/Products/CartSlice';
import  SiderBarMenuReducer  from './redux/Products/currentPage/CurrentPageSlice';

export const store = configureStore({
  reducer: {
    products : ProductSliceReducer,
    cart: CartSliceReducer,
    page: SiderBarMenuReducer
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;