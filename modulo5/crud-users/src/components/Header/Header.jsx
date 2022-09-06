import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <nav className={styles.header}>
      <h1>Cadastro de Usuários</h1>
      <div className={styles.actions}>
        <Link to="/">
          Todos os Usuários
        </Link>
        <Link to="/criar-usuario">
          + Novo Usuário
        </Link>
      </div>
    </nav>
  )
}