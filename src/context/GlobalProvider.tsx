import { ReactNode, useMemo, useState } from 'react';
import { ResultCharactersApi } from '../pages/Characters/interfaces/characterInterfaceAPI';
import { GlobalContext } from './GlobalContext';

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
    }),
    [characters, search, statusSelected, speciesSelected, genderSelected]
  );

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
