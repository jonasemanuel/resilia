import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const Contact = () => {
  const params = useParams()

  useEffect(() => {
    fetch(`api/products/${params.id}`)
  }, [])

  return <h1>Formulário de contato</h1>
}