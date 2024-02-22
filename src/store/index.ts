import { configureStore } from '@reduxjs/toolkit'
import carrinhoSlice from './carrinho'
import api from '../service/api'
export const store = configureStore({
  reducer: {
    carrinho: carrinhoSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
