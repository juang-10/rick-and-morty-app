import { createContext, Dispatch, SetStateAction } from 'react';
import { ResultCharactersApi } from '../pages/Characters/interfaces/characterInterfaceAPI';

type contextValues = {
  characters: ResultCharactersApi[];
  setCharacters: Dispatch<SetStateAction<ResultCharactersApi[]>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  statusSelected: string;
  setStatusSelected: Dispatch<SetStateAction<string>>;
  speciesSelected: string;
  setSpeciesSelected: Dispatch<SetStateAction<string>>;
  genderSelected: string;
  setGenderSelected: Dispatch<SetStateAction<string>>;
};

const defaultValue = {
  characters: [],
  setCharacters: () => {},
  search: '',
  setSearch: () => {},
  statusSelected: '',
  setStatusSelected: () => {},
  speciesSelected: '',
  setSpeciesSelected: () => {},
  genderSelected: '',
  setGenderSelected: () => {},
};

export const GlobalContext = createContext<contextValues>(defaultValue);
