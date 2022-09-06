import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { CreateUser } from './pages/CreateUser/CreateUser'
import { Home } from './pages/Home/Home'
import { Header } from './components/Header/Header'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/criar-usuario" element={<CreateUser />} />
        <Route path="/criar-usuario/:id" element={<CreateUser />} />
        <Route path="/editar-usuario/:id" element={<CreateUser />} />
      </Routes>
    </main>
  </BrowserRouter>
)
