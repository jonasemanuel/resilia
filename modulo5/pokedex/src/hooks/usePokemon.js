import { useEffect } from "react";
import axios from 'axios';

export const usePokemon = (params) => {
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`)
      .then(response => {
        console.log(response.data);
      })
  }, [])
}