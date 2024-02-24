import { configureStore } from '@reduxjs/toolkit'
import carrinhoSlice from './carrinho'
import api from '../service/api'
import favoritosSlcie from './reducer/favoritos'
export const store = configureStore({
  reducer: {
    carrinho: carrinhoSlice,
    favoritos: favoritosSlcie,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
