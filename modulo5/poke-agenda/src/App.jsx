import { useState } from 'react'
import './App.css'

const buscarPokemonPeloNome = async (nome) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);
  const data = await response.json();
  return {
    name: data.name,
    image: data.sprites.other.dream_world.front_default,
    abilities: data.abilities.map(({ ability }) => ability.name).join(', '),
    height: data.height,
    weight: data.weight,
    specie: data.species.name
  }
}

function App() {
  const [inputName, setInputName] = useState('');
  const [pokemon, setPokemon] = useState();

  return (
    <div className="App">
      <h1>Poke Agenda</h1>
      <div className="form-group">
        <div className='input-with-button'>
          <input placeholder='Nome do Pokémon' id="pokemon-name" onChange={(e) => {
            setInputName(e.target.value)
          }} />
          <button onClick={async () => { 
            const pokemonData = await buscarPokemonPeloNome(inputName) 
            setPokemon(pokemonData);
          }}>
            BUSCAR
          </button>
        </div>
      </div>
      <div className='pokemons-container'>
        {pokemon && <div className='pokemon'>
          <div className='pokemon-info'>
            <h2>{pokemon.name}</h2>
            <div className='pokemon-image'>
              <img src={pokemon.image} />
            </div>
          </div>
          <div className='pokemon-details'>
            <ul>
              <li>Peso: {pokemon.weight}</li>
              <li>Altura: {pokemon.height}</li>
              <li>Habilidades: {pokemon.abilities}</li>
              <li>Espécie: {pokemon.specie}</li>
            </ul>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default App
