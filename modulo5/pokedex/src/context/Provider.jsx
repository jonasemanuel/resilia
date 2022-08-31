import { useState } from "react"
import { Context } from "./Context"

export const Provider = ({ children }) => {
  const [myPokemons, setMyPokemons] = useState([])

  return (
    <Context.Provider value={{ myPokemons, setMyPokemons }}>
      {children}
    </Context.Provider>
  )
}