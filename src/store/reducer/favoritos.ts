import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState } from '../carrinho'
import { Produto } from '../../App'

const favoritosSlcie = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    addFavorito: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((p) => p.id === produto.id)) {
        state.itens = state.itens.filter((p) => p.id !== produto.id)
      } else {
        state.itens.push(produto)
      }
    }
  }
})
export const { addFavorito } = favoritosSlcie.actions
export default favoritosSlcie.reducer
