import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import { fetchCharacters } from '../Services/characterService';

interface Query {
  name: string;
  page: number;
  status: string;
  species: string;
  gender: string;
}

export const useCharacters = () => {
  const {
    setCharacters,
    search,
    statusSelected,
    speciesSelected,
    genderSelected,
    setStatusSelected,
    setSpeciesSelected,
    setGenderSelected,
  } = useContext(GlobalContext);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [finalSearch, setFinalSearch] = useState('');

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
  };

  useEffect(() => {
    setPage(1);
  }, [search]);

  useEffect(() => {
    getCharacters();
  }, [finalSearch, page, statusSelected, speciesSelected, genderSelected]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFinalSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  return {
    clearFilters,
    handlePaginationChange,
    loading,
    page,
    totalPages,
  };
};
