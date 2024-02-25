import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initialState } from '../carrinho'
import { Produto } from '../../App'

const favoritosSlcie = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    addFavorito: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      // let favoritosArray = state.itens

      if (state.itens.find((p) => p.id === produto.id)) {
        // const favoritosSemProduto = favoritosArray.filter(
        //   (p) => p.id !== produto.id
        // )
        state.itens = state.itens.filter((p) => p.id !== produto.id)
      } else {
        state.itens.push(produto)
      }
    }
  }
})
export const { addFavorito } = favoritosSlcie.actions
export default favoritosSlcie.reducer
