import { Button } from '../Button/Button'
import style from './Header.css'

export const Header = () => {
  return (
    <nav className={style.nav}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" />
      <div className='actions'>
        <Button label="Pokémons" />
        <Button label="Meus Pokémons"/>
      </div>
    </nav>
  )
}