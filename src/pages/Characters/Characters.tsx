import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { fetchCharacters } from '../Services/characterService';
import { CharacterCard, SearchBar } from '../components';
import { Container, Box } from '@mui/material';

interface Query {
  name: string;
}
export const Characters = () => {
  const { characters, setCharacters, search } = useContext(GlobalContext);

  const getCharacters = async (query: Query) => {
    try {
      const response = await fetchCharacters(query);
      setCharacters(response?.data.results || []);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const query = {
        name: search,
      };
      getCharacters(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

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
    </Container>
  );
};
