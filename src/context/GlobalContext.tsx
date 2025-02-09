import { createContext, Dispatch, SetStateAction } from 'react';
import { ResultCharactersApi } from '../pages/Characters/interfaces/characterInterfaceAPI';
import { Result } from '../pages/Episodes/interfaces/episodes.interface';

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
  id: string | null;
  setId: Dispatch<SetStateAction<string | null>>;
  resultCharacterEpisode: Result[];
  setResultCharacterEpisode: Dispatch<SetStateAction<Result[]>>;
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
  id: null,
  setId: () => {},
  resultCharacterEpisode: [],
  setResultCharacterEpisode: () => {},
};

export const GlobalContext = createContext<contextValues>(defaultValue);
