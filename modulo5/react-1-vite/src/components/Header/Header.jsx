import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import styles from './Header.module.css'

export const Header = () => {
  const context = useContext(AppContext)

  return (
    <nav className={styles.header}>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/produto">Contato</Link>
      </ul>
      <div className='user-email'>{context.user.email}</div>
    </nav>
  )
}