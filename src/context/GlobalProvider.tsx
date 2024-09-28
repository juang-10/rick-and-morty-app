import { ReactNode, useMemo, useState } from 'react';
import { ResultCharactersApi } from '../pages/interfaces/characterInterfaceAPI';
import { GlobalContext } from './GlobalContext';

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [characters, setCharacters] = useState<ResultCharactersApi[]>([]);
  const [search, setSearch] = useState('');

  const contextValue = useMemo(
    () => ({
      characters,
      setCharacters,
      search,
      setSearch,
    }),
    [characters, search]
  );

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
