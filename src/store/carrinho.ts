import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../App'

type carriongState = {
  itens: Produto[]
}

const initialState: carriongState = { itens: [] }

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const item = action.payload

      if (state.itens.find((prod) => prod.id === item.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(item)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
