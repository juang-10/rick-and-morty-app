import { ReactNode, useMemo, useState } from 'react';
import { ResultCharactersApi } from '../pages/Characters/interfaces/characterInterfaceAPI';
import { GlobalContext } from './GlobalContext';
import { Result } from '../pages/Episodes/interfaces/episodes.interface';

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [characters, setCharacters] = useState<ResultCharactersApi[]>([]);
  const [search, setSearch] = useState('');
  const [statusSelected, setStatusSelected] = useState<string>('');
  const [speciesSelected, setSpeciesSelected] = useState<string>('');
  const [genderSelected, setGenderSelected] = useState<string>('');
  const [ id, setId ] = useState<string | null>(null);
  const [ resultCharacterEpisode, setResultCharacterEpisode ] = useState<Result[]>([]);

  const contextValue = useMemo(
    () => ({
      characters,
      setCharacters,
      search,
      setSearch,
      statusSelected,
      setStatusSelected,
      speciesSelected,
      setSpeciesSelected,
      genderSelected,
      setGenderSelected,
      id,
      setId,
      resultCharacterEpisode,
      setResultCharacterEpisode
    }),
    [characters, search, statusSelected, speciesSelected, genderSelected, id, resultCharacterEpisode]
  );

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
