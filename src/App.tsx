import { useEffect, useState } from 'react'
import './App.css'

type ProdutoType = {
  id:number,
  nome:string,
  descricao:string,
  preco:string,
  imagem:string
}
function App() {
  const [produtos, setProdutos] = useState<ProdutoType[]>([])
  //useEffect(O Que fazer, Quando fazer)
  useEffect(()=>{
    fetch("https://one022b-marketplace-w15n.onrender.com/produtos")
    .then(resposta=>resposta.json())
    .then(dados=>setProdutos(dados))
  },[])

  return (
    <>
    <div className="coitaner-produtos">
    {produtos.map(prod=>{
      return(
        <div key={prod.id}className='produto-item'>
          <h1>{prod.nome}</h1>
          <p>{prod.imagem}</p>
          <p>{prod.preco}</p>
          <p>{prod.descricao}</p>

        </div>
     ) 
    })}
    </div>

    </>
  )
}

export default App