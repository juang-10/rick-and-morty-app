import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { useCharacters } from "../Characters/hooks/useCharacters";
import { Box, Skeleton, Typography } from "@mui/material";
import { CharacterCard, PaginationRounded } from "../Characters/components";
import { FilterEpisodes } from "./components";

export const Episodes = () => {
  const { characters } = useContext(GlobalContext);
  const { handlePaginationChange, loading, page, totalPages } =
    useCharacters();
  return (
    <Box display="flex" gap={4} p={4} alignItems="flex-start">
        <Box flex={1}>
          <FilterEpisodes />
        </Box>
        <Box flex={4}>
          <Typography variant="h4" mb={2} align="center">
            Episode name: 
          </Typography>
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
  )
};
