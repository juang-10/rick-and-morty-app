import axios from 'axios';
import { EpisodesAPI } from '../interfaces/episodes.interface';

export const getEpisodesApi = async (id?: string) => {
  console.log('🚀 ~ getEpisodesApi ~ id:', id);
  const response = await axios.get<EpisodesAPI>(
    id
      ? `https://rickandmortyapi.com/api/episode/${id}`
      : 'https://rickandmortyapi.com/api/episode'
  );
  return response?.data;
  // return response?.data.characters || [];
};
