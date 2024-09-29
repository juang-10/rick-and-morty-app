import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { fetchCharacters } from '../Services/characterService';
import { CharacterCard, PaginationRounded, SearchBar } from '../components';
import { Container, Box } from '@mui/material';

interface Query {
  name: string;
}
export const Characters = () => {
  const { characters, setCharacters, search } = useContext(GlobalContext);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  function handlePaginationChange(_: ChangeEvent<unknown>, value: number) {
    if (search) {
      setPage(value);
    }
    setPage(value);
  }

  const getCharacters = async (query: Query) => {
    try {
      const response = await fetchCharacters(query);
      setCharacters(response?.data.results || []);
      setTotalPages(response?.data.info.pages || 1);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const query = {
        name: search,
        page: page,
      };
      getCharacters(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [search, page]);

  return (
    <Container>
      <SearchBar />
      <Box
        display="flex"
        flexWrap="wrap"
        gap={4}
        justifyContent="center"
        mt={4}
      >
        {characters.map((character) => (
          <CharacterCard key={character.id} {...character} />
        ))}
      </Box>
      <PaginationRounded
        count={totalPages}
        page={page}
        onChange={handlePaginationChange}
      />
    </Container>
  );
};
