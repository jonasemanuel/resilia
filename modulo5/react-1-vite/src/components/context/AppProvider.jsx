import { AppContext } from "./AppContext"
import { useState } from 'react';

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({ name: '', email: '' })

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  )
}