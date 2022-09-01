import { Link } from "react-router-dom"
import { Card } from "../Card/Card"
import './CardsContainer.css'

export const CardsContainer = ({ items, showCaptureButton = true, isClickable }) => {
  return (
    <div className="cards-container">
      {items.map((item, index) => {
        if(isClickable) {
          return (
            <Link to={`/pokemon/${item.name}`}>
              <Card 
                showCaptureButton={showCaptureButton} 
                key={index} name={item.name} 
                image={item.image} />
            </Link>
            )
        } 
        return (
          <Card 
            showCaptureButton={showCaptureButton} 
            key={index} name={item.name} 
            image={item.image} />
        )
        
      })}
    </div>
  )
}