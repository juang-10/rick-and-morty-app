import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useContext, useState } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';

const status = ['Alive', 'Dead', 'unknown'];
const species = [
  'Human',
  'Alien',
  'Humanoid',
  'Poopybutthole',
  'Mythological Creature',
  'Animal',
  'Robot',
  'Cronenberg',
  'Disease',
  'unknown',
];
const genders = ['female', 'male', 'genderless', 'unknown'];

interface FiltersCharactersProps {
  clearFilters: () => void;
}
export const FiltersCharacters = ({clearFilters}: FiltersCharactersProps) => {
  const { setStatusSelected, setSpeciesSelected, setGenderSelected } = useContext(GlobalContext);
  return (
    <Box>
      <Typography variant="h6">Filters</Typography>
      <Button onClick={clearFilters}>Clear Filters</Button>
      <Box>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Status</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {status.map((statusCharacter) => (
              <Button 
                variant="contained" 
                sx={{ mr: 2, mb: 2 }}
                onClick={() => setStatusSelected(statusCharacter)}
              >
                {statusCharacter}
              </Button>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Species</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {species.map((specie) => (
              <Button 
                variant="contained" 
                sx={{ mr: 2, mt: 2 }}
                onClick={() => setSpeciesSelected(specie)}
              >
                {specie}
              </Button>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Genders</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {genders.map((gender) => (
              <Button 
                variant="contained" 
                sx={{ mr: 2, mt: 2 }}
                onClick={() => setGenderSelected(gender)}
              >
                {gender}
              </Button>
            ))}
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};
