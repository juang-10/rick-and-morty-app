import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { fetchCharacters } from './Services/characterService';
import { Container, Box, Skeleton } from '@mui/material';
import { CharacterCard, FiltersCharacters, PaginationRounded, SearchBar } from './components';

interface Query {
  name: string;
  page: number;
  status: string;
  species: string;
  gender: string;
}
export const Characters = () => {
  const { characters, setCharacters, search, statusSelected, speciesSelected, genderSelected, setStatusSelected, setSpeciesSelected, setGenderSelected } = useContext(GlobalContext);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [ loading, setLoading ] = useState(false);
  const [ finalSearch, setFinalSearch ] = useState('');

  function handlePaginationChange(_: ChangeEvent<unknown>, value: number) {
    setPage(value);
  }

  const getCharacters = async () => {
    try {
      setLoading(true);
      const query: Query = {
        name: finalSearch,
        page: page,
        status: statusSelected,
        species: speciesSelected,
        gender: genderSelected,
      };
      const response = await fetchCharacters(query);
      setCharacters(response?.data.results || []);
      setTotalPages(response?.data.info.pages || 1);
    } catch (error) {
      console.error('Error fetching characters:', error);
    } finally {
      setLoading(false);
    }
  };

  const clearFilters = () => {
    setPage(1);
    setFinalSearch('');
    setStatusSelected('');
    setSpeciesSelected('');
    setGenderSelected('');
  }

  useEffect(() => {
    setPage(1);
  }, [search]);

  useEffect(() => {
    getCharacters();
  } , [finalSearch, page, statusSelected, speciesSelected, genderSelected]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFinalSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <Box display="flex" gap={4} p={4} alignItems="flex-start">
      <Box flex={1}>
        <FiltersCharacters clearFilters={clearFilters}/>
      </Box>
      <Box flex={4}>
        <SearchBar />
        <Box
          display="flex"
          flexWrap="wrap"
          gap={4}
          justifyContent="center"
          mt={4}
        >
          {loading ? (
            Array.from(new Array(8)).map((_, index) => (
              <Skeleton
                key={index}
                variant="rectangular"
                width={345}
                height={400}
                animation="wave"
              />
            ))
          ) : (
            characters.map((character) => (
              <CharacterCard key={character.id} {...character} />
            ))
          )}
        </Box>
        <PaginationRounded
          count={totalPages}
          page={page}
          onChange={handlePaginationChange}
        />
      </Box>
    </Box>
  );
};
