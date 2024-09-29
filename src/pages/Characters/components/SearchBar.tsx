import { InputAdornment, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ChangeEvent, useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';

export const SearchBar = () => {
  const { search, setSearch } = useContext(GlobalContext);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  return (
    <OutlinedInput
      placeholder="Search"
      value={search}
      onChange={handleSearch}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
      fullWidth
    />
  );
};
