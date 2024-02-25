import { useGetProdutosQuery } from '../service/api'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../store'

// type Props = {
//   // produtos: ProdutoType[]
//   // favoritos: ProdutoType[]
//   // adicionarAoCarrinho: (produto: ProdutoType) => void
//   // favoritar: (produto: ProdutoType) => void
// }

const ProdutosComponent = () =>
  // {
  // produtos,
  // favoritos
  // }: // adicionarAoCarrinho,
  // favoritar
  // Props
  {
    const { data: produtos } = useGetProdutosQuery()
    const favoritos = useSelector((store: RootReducer) => store.favoritos.itens)

    const produtoEstaNosFavoritos = (produto: ProdutoType) => {
      const produtoId = produto.id
      const IdsDosFavoritos = favoritos.map((f) => f.id)
      return IdsDosFavoritos.includes(produtoId)
    }

    return (
      <>
        <S.Produtos>
          {produtos?.map((produto) => (
            <Produto
              estaNosFavoritos={produtoEstaNosFavoritos(produto)}
              key={produto.id}
              produto={produto}
              // favoritar={favoritar}
              // aoComprar={adicionarAoCarrinho}
            />
          ))}
        </S.Produtos>
      </>
    )
  }

export default ProdutosComponent
