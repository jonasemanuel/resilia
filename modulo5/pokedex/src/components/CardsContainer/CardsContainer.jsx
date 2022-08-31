import { Card } from "../Card/Card"
import './CardsContainer.css'

export const CardsContainer = (props) => {
  return (
    <div className="cards-container">
      {props.items.map((item, index) => <Card key={index} name={item.name} image={item.image} />)}
    </div>
  )
}