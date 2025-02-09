import { Autocomplete, TextField } from '@mui/material';
import { useContext, useEffect, useMemo, useState } from 'react';
import { getEpisodesApi } from '../services';
import { GlobalContext } from '../../../context/GlobalContext';

export const FilterEpisodes = () => {
  const [value, setValue] = useState<string | null>(null);
  const [count, setCount] = useState(0);
  const { setResultCharacterEpisode } = useContext(GlobalContext);

  const getEpisode = async () => {
    try {
      const id = value?.split(' ')[1];
      const response = await getEpisodesApi(id);
      setResultCharacterEpisode(response?.results);
      setCount(response?.info?.count);
    } catch (error) {
      console.error('Error fetching episodes:', error);
    }
  };

  const arr = useMemo(() => {
    return Array(count)
      .fill(null)
      .map((_, index) => `Episode ${index + 1}`);
  }, [count]);

  useEffect(() => {
    getEpisode();
  }, [value]);

  return (
    <Autocomplete
      disablePortal
      options={arr}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Episodes" />}
      value={value}
      onChange={(event, newValue) => {
        if (newValue !== null) {
          setValue(newValue);
        } else {
          setValue(null);
        }
      }}
    />
  );
};
