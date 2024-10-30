import { useEffect, useState } from 'react';
import './App.css';

type ProdutoType = {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  imagem: string;
};

//Criamos um tipo usuario para classificar o tipo da const e especificar a tipagem dos dados que foram inseridos no banco e serão mostrados na tela
type UsuarioType = {
  id: number;
  nome: string;
  email: string;
  created_at: string;
  updated_at: string;
};

function App() {
  const [produtos, setProdutos] = useState<ProdutoType[]>([]);
  const [usuarios, setUsuarios] = useState<UsuarioType[]>([]);

  useEffect(() => {
    console.log("Carregando produtos...");
    fetch("https://one022b-marketplace-w15n.onrender.com/produtos")
      .then(resposta => resposta.json())
      .then(dados => setProdutos(dados))
      .catch(error => console.error("Erro ao buscar produtos:", error));
  }, []);
//Criamos um UseEffect para colocar a url do usuario e retornar seus dados
  useEffect(() => {
    console.log("Carregando usuários...");
    fetch("https://one022b-marketplace-w15n.onrender.com/usuarios")
      .then(resposta => resposta.json())
      .then(dados => setUsuarios(dados))
      .catch(error => console.error("Erro ao buscar usuários:", error));
  }, []);

  return (
    <>
      <div className='container-produtos'>
        {produtos.map(prod => (
          <div key={prod.id} className='produto-item'>
            <h1>{prod.nome}</h1>
            <img src={prod.imagem}/>
            <p>{prod.descricao}</p>
            <p>{prod.preco}</p>

          </div>
        ))}
      </div>
      
      <div className='container-usuarios'>
        {usuarios.map(usua => (
          <div key={usua.id} className='usuario-item'>
            <h1>{usua.nome}</h1>
            <p>{usua.email}</p>
            <p>{usua.created_at}</p>
            <p>{usua.updated_at}</p>
          </div>
        ))}
      </div>
    </>
    /Criamos uma div para conter os dados da tabela usuarios do banco de dados/ 
  );
}

export default App;