import { Button } from '../Button/Button'
import './Card.css'

export const Card = ({ name, image }) => {
  return (
    <div className="card">
      <div className="name">{name}</div>
      <img src={image} />
      <Button label="Capturar" />
    </div>
  )
}