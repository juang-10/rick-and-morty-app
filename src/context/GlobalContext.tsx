import { createContext, Dispatch, SetStateAction } from "react";
import { ResultCharactersApi } from "../pages/interfaces/characterInterfaceApi";


type contextValues = {
  characters: ResultCharactersApi[];
  setCharacters: Dispatch<SetStateAction<ResultCharactersApi[]>>;
}

const defaultValue = {
  characters: [],
  setCharacters: () => {}
}

export const GlobalContext = createContext<contextValues>(defaultValue);