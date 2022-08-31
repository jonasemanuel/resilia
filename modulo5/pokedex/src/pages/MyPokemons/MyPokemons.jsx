import { useContext } from "react";
import { Context } from "../../context/Context";

export const MyPokemons = () => {
  const { myPokemons } = useContext(Context)

  return (
    <ul>
      {myPokemons.map(item => <li>{item.name}</li>)}
    </ul>
  )
}