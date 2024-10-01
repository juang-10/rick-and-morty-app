import { Box, Skeleton, Typography } from '@mui/material';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import {
  CharacterCard,
  FiltersCharacters,
  PaginationRounded,
  SearchBar,
} from './components';
import { useCharacters } from './hooks/useCharacters';

export const Characters = () => {
  const { characters } = useContext(GlobalContext);
  const { clearFilters, handlePaginationChange, loading, page, totalPages } =
    useCharacters();

  return (
    <>
      <Box display="flex" gap={4} p={4} alignItems="flex-start">
        <Box flex={1}>
          <FiltersCharacters clearFilters={clearFilters} />
        </Box>
        <Box flex={4}>
          <Typography variant="h4" mb={2} align="center">
            Characters
          </Typography>
          <SearchBar />
          <Box
            display="flex"
            flexWrap="wrap"
            gap={4}
            justifyContent="center"
            mt={4}
          >
            {loading
              ? Array.from(new Array(8)).map((_, index) => (
                  <Skeleton
                    key={index}
                    variant="rectangular"
                    width={345}
                    height={400}
                    animation="wave"
                  />
                ))
              : characters.map((character) => (
                  <CharacterCard key={character.id} {...character} />
                ))}
          </Box>
          <PaginationRounded
            count={totalPages}
            page={page}
            onChange={handlePaginationChange}
          />
        </Box>
      </Box>
    </>
  );
};
