import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initialState } from '../carrinho'
import { Produto } from '../../App'

const favoritosSlcie = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    addFavorito: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      let favoritosArray = state.itens

      if (favoritosArray.find((p) => p.id === produto.id)) {
        const favoritosSemProduto = favoritosArray.filter(
          (p) => p.id !== produto.id
        )
        favoritosArray = favoritosSemProduto
      } else {
        favoritosArray.push(produto)
      }
    }
  }
})
export const { addFavorito } = favoritosSlcie.actions
export default favoritosSlcie.reducer
