import { useContext } from 'react'
import { Context } from '../../context/Context'
import { Button } from '../Button/Button'
import './Card.css'

export const Card = ({ name, image }) => {
  const { myPokemons, setMyPokemons } = useContext(Context)
  
  return (
    <div className="card">
      <div className="name">{name}</div>
      <img src={image} />
      <Button label="Capturar" onClick={() => {
        setMyPokemons([...myPokemons, { name, image }])
      }} />
    </div>
  )
}