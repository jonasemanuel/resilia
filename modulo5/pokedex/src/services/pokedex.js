import axios from "axios"

export const pokeDex = async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
  return response.data;
}