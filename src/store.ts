import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import  ProductSliceReducer  from './redux/Products/ProductSlice';

export const store = configureStore({
  reducer: {
    products : ProductSliceReducer
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