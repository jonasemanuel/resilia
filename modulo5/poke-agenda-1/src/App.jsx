import { Input } from './components/Input'
import { Button } from './components/Button'
import { pokemon } from './service/requisicao'
import { useEffect, useState } from 'react';

function App() {
  const [image, setImage] = useState('')

  useEffect(() => {
    pokemon().then(data => {
      setImage(data.sprites.front_default)
    })
  }, [])

  return (
    <div>
      <Input />
      <Button callback={() => {}} texto="Buscar Pokémon" />
      <img src={image} />
    </div>
  )
}

export default App
