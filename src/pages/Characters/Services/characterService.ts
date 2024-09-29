import axios from 'axios';
import { CharactersAPI } from '../interfaces/characterInterfaceAPI';

interface ParamsProps {
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  page?: number;
}
export const fetchCharacters = async ({
  name,
  status,
  species,
  type,
  gender,
  page,
}: ParamsProps = {}) => {
  try {
    // Create an object with all parameters
    const allParams = { name, status, species, type, gender, page };

    // Filter out parameters that are not undefined, null or empty string
    const definedParams = Object.fromEntries(
      Object.entries(allParams).filter(
        ([_, value]) => value !== undefined && value !== null && value !== ''
      )
    );

    // Initialize the application options
    const options: any = {};

    // If there are defined parameters, add them to the options
    if (Object.keys(definedParams).length > 0) {
      options.params = definedParams;
    }

    // Make the request with or without parameters
    const response = await axios.get<CharactersAPI>(
      `${import.meta.env.VITE_BASE_URL}/character`,
      options
    );
    return response;
  } catch (error) {
    console.error('Error fetching characters:', error);
  }
};
