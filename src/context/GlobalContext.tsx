import { createContext, Dispatch, SetStateAction } from 'react';
import { ResultCharactersApi } from '../pages/interfaces/characterInterfaceAPI';

type contextValues = {
  characters: ResultCharactersApi[];
  setCharacters: Dispatch<SetStateAction<ResultCharactersApi[]>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

const defaultValue = {
  characters: [],
  setCharacters: () => {},
  search: '',
  setSearch: () => {},
};

export const GlobalContext = createContext<contextValues>(defaultValue);
