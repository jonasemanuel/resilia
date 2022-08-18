export function pokemon(nomePokemon) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/bulbasaur`).then((response) => response.json());
}

export async function pokemon2(nomePokemon) {
  const requisicao = await fetch(`https://pokeapi.co/api/v2/pokemon/bulbasaur`)
  return requisicao.json()
}