import { ReactNode, useMemo, useState } from "react"
import { ResultCharactersApi } from "../pages/interfaces/characterInterfaceApi";
import { GlobalContext } from "./GlobalContext";

export const GlobalContextProvider = ({children}: {children: ReactNode}) => {
  const [ characters, setCharacters ] = useState<ResultCharactersApi[]>([]);

  const contextValue = useMemo(
    () => ({
      characters,
      setCharacters
    }), [
      characters,
    ])

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  )
}