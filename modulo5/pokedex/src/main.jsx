import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Context } from './context/Context'
import { Home } from './pages/Home/Home'
import { MyPokemons } from './pages/MyPokemons/MyPokemons'

import './index.css'
import { Provider } from './context/Provider'
import { Pokemon } from './pages/Pokemon/Pokemon'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/meus-pokemons' element={<MyPokemons />} />
          <Route path='/pokemon/:pokemonName' element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
