import { InputAdornment, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

export const SearchBar = () => {
  const { search, setSearch } = useContext(GlobalContext);
  return (
    <OutlinedInput
      placeholder="Search"
      value={search}
      onChange={(event) => setSearch(event.target.value)}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
      fullWidth
      sx={{ mt: 4 }}
    />
  );
};
