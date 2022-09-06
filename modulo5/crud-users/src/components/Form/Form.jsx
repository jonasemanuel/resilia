import styles from './Form.module.css'
import { useState } from 'react';

export const Form = (props) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    cpf: "",
    phone: ""
  })

  return (
    <form className={styles.form}>
      <input 
        type="text" 
        placeholder="Insira o nome aqui" 
        onChange={(event) => {
          setUser({
            ...user,
            name: event.target.value
          })
        }} />
      <input 
        type="text" 
        placeholder="Insira o email aqui" 
        onChange={(event) => {
          setUser({
            ...user,
            email: event.target.value
          })
        }}
      />
      <input 
        type="number" 
        placeholder="Insira a idade aqui" 
        onChange={(event) => {
          setUser({
            ...user,
            age: event.target.value
          })
        }}
      />
      <input 
        type="text" 
        placeholder="Insira o CPF aqui" 
        onChange={(event) => {
          setUser({
            ...user,
            cpf: event.target.value
          })
        }}
      />
      <input 
        type="text" 
        placeholder="Insira o telefone aqui" 
        onChange={(event) => {
          setUser({
            ...user,
            phone: event.target.value
          })
        }}
      />
      <button onClick={(e) => {
        e.preventDefault()
        props.onFinish(user)
      }}>{props.hasUser ? "Editar" : "Cadastrar"}</button>
    </form>
  )
}