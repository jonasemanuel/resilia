import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../Button/Button'
import style from './Header.css'

export const Header = () => {
  const navigate = useNavigate()

  return (
    <nav className={style.nav}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" />
      <div className='actions'>
        <Link to="/">
          <Button label="Pokémons" />
        </Link>
        <Button label="Meus Pokémons" onClick={() => {
          navigate('/meus-pokemons')
        }} />
      </div>
    </nav>
  )
}