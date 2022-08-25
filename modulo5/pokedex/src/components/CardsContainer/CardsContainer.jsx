import { Card } from "../Card/Card"
import './CardsContainer.css'

export const CardsContainer = (props) => {
  return (
    <div className="cards-container">
      {props.items.filter(item => item.name !== "bulbasaur").map((item, index) => <Card name={item.name} image={item.image} />)}
    </div>
  )
}