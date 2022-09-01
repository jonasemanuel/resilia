import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { usePokemon } from '../../hooks/usePokemon';

export const Pokemon = () => {
  const params = useParams();

  usePokemon(params)

  return (
    <h1>Pokemon</h1>
  )
}