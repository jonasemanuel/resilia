import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  //Aqui estamos criando os estados para armazenar os valores dos <input>. Um pra cada input
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [bornDate, setBornDate] = useState('')
  const [obs, setObs] = useState('')

  //Aqui estamos criando uma função que chama a API pra cadastrar os dados do formulario. 
  //Aqui usamos .then e .catch
  const enviaDadosPraApiUsandoThenCatch = (name, email, bornDate, obs) => {
    //Quando o nome da propriedade é o mesmo nome do valor podemos omitir o valor
    // Isso { name: name, email: email } é a mesma coisa que isso { name, email }
    const dadosQueDeveSerEnviadosParaAPI = { 
      name, 
      email, 
      bornDate, 
      obs
    }
    axios.post('https://sheetdb.io/api/v1/oijyk6922ngsq', dadosQueDeveSerEnviadosParaAPI)
      //then é aonde recebemos o sucesso da API
      .then((resposta) => {
        alert("SUCESSO")
      })
      //catch é aonde recebemos a falha da API
      .catch((erro) => {
        alert("FALHA")
      })
  }

  //Aqui estamos criando outra uma função que chama a API pra cadastrar os dados do formulario. 
  //Aqui usamos async e await (note que o código fica melhor e mais limpo)
  const enviaDadosPraApiUsandoAsyncAwait = async (name, email, bornDate, obs) => {
    const dadosQueDeveSerEnviadosParaAPI = { 
      name: name,
      email: email, 
      bornDate: bornDate, 
      obs: obs
    }

    //Quando usamos async e wait, para conseguir obter a falha da api PRECISAMOS usar try e catch.
    try {
      const resposta = await axios.post('https://sheetdb.io/api/v1/oijyk6922ngsq', dadosQueDeveSerEnviadosParaAPI)
      alert("SUCESSO")
    } catch(erro) {
      alert("FALHA")
    }
  }

  return (
    <div className="App">
      <h1>Resilia Form</h1>
      <form>
        <input type="text" placeholder='Insira o nome aqui' onChange={(e) => {
          //Aqui pegamos o value (que é o que usuário digitou no input) usando desestruturação
          const { value } = e.target;
          //Aqui colocamos o que o usuário digitou dentro do estado
          setName(value)
        }}/>
        <input type="text" placeholder='Insira o email aqui' onChange={(e) => {
          //Aqui colocamos o que o usuário digitou dentro do estado
          setEmail(e.target.value)
        }}/>
        {/*//Aqui pegamos o target de dentro do event que usando desestruturação */}
        <input type="text" placeholder='Insira a data de nascimento aqui' onChange={({ target }) => {
          //Aqui colocamos o que o usuário digitou dentro do estado
          setBornDate(target.value)
        }}/>
        <input type="text" placeholder='Insira a observação aqui aqui' onChange={(e) => {
          //Aqui colocamos o que o usuário digitou dentro do estado
          setObs(e.target.value)
        }}/>
        <button onClick={(e) => {
          //Quando temos um button dentro das tags <form> naturalmente ao clicar nele ele vai tentar recarregar a página
          //O preventDefault é pra evitar que isso aconteça
          e.preventDefault()
          //Aqui chamamos o metódo para fazer a requisição pra api.
          //Tanto faz um ou outro. Criei apenas para mostrar o uso do then e catch, e async/await
          enviaDadosPraApiUsandoThenCatch(name, email, bornDate, obs)
          enviaDadosPraApiUsandoAsyncAwait(name, email, bornDate, obs)
        }}>Enviar dados</button>
      </form>
    </div>
  )
}

export default App
