import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { Table } from "../../Table/Table";

import styles from './Home.module.css'

export const Home = () => {
  const context = useContext(AppContext)

  console.log(context)

  useEffect(() => {
  }, [])

  return (
    <div className={styles.home}>
      <h1>Home</h1>
      <button onClick={() => { context.setUser({ email: 'jonas' }) }}>Esconder tabela</button>
    </div>
  )
}