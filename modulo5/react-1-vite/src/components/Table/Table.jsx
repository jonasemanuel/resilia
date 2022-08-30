import styles from './Table.module.css'
import { useEffect } from 'react';

export const Table = ({ items, isLoading }) => {

  useEffect(() => {
    console.log("MONTEI")

    return () => {
      console.log("DESMONTEI")
    }
  }, [])

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Data de Nascimento</th>
          <th>Observações</th>
        </tr>
      </thead>
      <tbody>
        {!isLoading && items.map(user => 
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.bornDate}</td>
            <td>{user.obs}</td>
        </tr>)}
        {isLoading && <tr>Carregando...</tr>}
      </tbody>
    </table>)
}