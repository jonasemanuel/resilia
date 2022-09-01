import { useContext } from "react";
import { CardsContainer } from "../../components/CardsContainer/CardsContainer";
import { Context } from "../../context/Context";

export const MyPokemons = () => {
  const { myPokemons } = useContext(Context)

  return (
    <div>
      <h1>Meus Pokémons</h1>
      <CardsContainer showCaptureButton={false} items={myPokemons} isClickable={true} />
    </div>
  )
}