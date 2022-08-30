import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Contact } from './components/pages/Contact'
import { AppProvider } from './components/context/AppProvider';
import { Header } from './components/Header/Header'
import { Home } from './components/pages/Home/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/produtos' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>
)
