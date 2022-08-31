import { useEffect, useState, useContext } from "react"
import { CardsContainer } from "../../components/CardsContainer/CardsContainer"
import { pokeDex } from "../../services/pokedex"
import './Home.css'
import { Context } from "../../context/Context";

export const Home = () => {
  const [pokemons, setPokemons] = useState([])

  const getPokemons = async () => {
    const { results } = await pokeDex()
    const novoArray = []
    results.forEach((item, index) => {
      novoArray.push({
        name: item.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
      })
    })
    setPokemons(novoArray)
  }

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <main className="home-container">
      <h1>Pokedex</h1>
      <CardsContainer items={pokemons} />
    </main>
  )
}