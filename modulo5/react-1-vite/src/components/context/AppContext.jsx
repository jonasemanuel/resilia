import { createContext } from "react";

export const AppContext = createContext({ user: { name: null, email: null } })