import axios from "axios";
import { CharactersAPI } from "../interfaces/characterInterfaceApi";

export const fetchCharacters = async () => {
  try {
    const response = await axios.get<CharactersAPI>(`${import.meta.env.BASE_URL}/character`);
    return response.data;
  } catch (error) {
    console.error('Error fetching characters:', error);
  }
};