import styles from './UsersTable.module.css'
import { Link } from 'react-router-dom'
export const UsersTable = (props) => {

  return (
    <table className={styles.table}>
      <thead>
        <th>ID</th>
        <th>Nome</th>
        <th>Email</th>
        <th>Idade</th>
        <th>CPF</th>
        <th>Telefone</th>
        <th>Criado em</th>
        <th>Ações</th>
      </thead>
      {props.users.map(user => {
        return (
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
            <td>{user.cpf}</td>
            <td>{user.phone}</td>
            <td>{user.created_at.split('T')[0]}</td>
            <td>
              <Link to={`/editar-usuario/${user.id}`}>Editar</Link> 
              - 
              <a onClick={(e) => {
                 e.preventDefault()
                 props.onDelete(user.id)
              }} href="#">Deletar</a>
            </td>
        </tr>
      )})}
    </table>
  )
}


//1- Função para fazer a requisição para o backend usando axios.
//2- Chamamos a função no componente Home.jsx dentro do useEffect
//3- Dentro do then pegamos os dados da requisição e colocamos no state.
//4- Criamos um propriedade no componente tabela para receber os users
//5- Criamos um map dentro do componente tabela para exibir usuário por usuário na tabela