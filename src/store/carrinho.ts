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
    adiconar: (state, action: PayloadAction<Produto>) => {
      const item = action.payload

      if (state.itens.find((prod) => prod.id === item.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(item)
      }
    }
  }
})

export default carrinhoSlice.reducer

// const [produtos, setProdutos] = useState<Produto[]>([])
//   const [carrinho, setCarrinho] = useState<Produto[]>([])
//   const [favoritos, setFavoritos] = useState<Produto[]>([])

//   function adicionarAoCarrinho(produto: Produto) {
//     if (carrinho.find((p) => p.id === produto.id)) {
//       alert('Item já adicionado')
//     } else {
//       setCarrinho([...carrinho, produto])
//     }
//   }

//   function favoritar(produto: Produto) {
//     if (favoritos.find((p) => p.id === produto.id)) {
//       const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
//       setFavoritos(favoritosSemProduto)
//     } else {
//       setFavoritos([...favoritos, produto])
//     }
//   }
