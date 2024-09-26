import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { fetchCharacters } from "../Services/characterService";
import { CharacterCard } from "../components";
import { Box } from "@mui/material";

export const Characters = () => {
  const { characters, setCharacters } = useContext(GlobalContext);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await fetchCharacters();
        setCharacters(response?.data.results || []);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    }
    getCharacters();
  }, [])
  
  return (
    <Box display='flex' flexWrap='wrap' gap={4} justifyContent="center">
      {characters.map((character) => (
        <CharacterCard key={character.id} {...character} />
      ))}
    </Box>
  )
}