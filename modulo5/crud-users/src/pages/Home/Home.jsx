import { useEffect, useState } from 'react'
import { UsersTable } from '../../components/UsersTable/UsersTable'
import { deleteUser, getUsers } from '../../services/users-service'
import styles from './Home.module.css'

export const Home = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    getUsers().then(({ data }) => {
      setUsers(data)
    }).catch(error => {
      console.log("ERROR", error)
    })
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className={styles.home}>
      <h1>Todos os Usuários</h1>
      <div className={styles.table}>
        <UsersTable users={users} onDelete={(id) => {
          const deleteUserConfirm = confirm("Você deseja deletar esse usuário?")
          if(deleteUserConfirm) {
            deleteUser(id).then(() => {
              alert("Usuário deletado com sucesso")
              fetchUsers()
            }).catch(error => {
              alert("Erro ao deletar usuário")
            })
          }
        }} />
      </div>
    </div>
  )
}