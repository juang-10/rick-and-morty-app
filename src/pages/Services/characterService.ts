import axios from 'axios';
import { CharactersAPI } from '../interfaces/characterInterfaceAPI';

interface ParamsProps {
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
}
export const fetchCharacters = async ({
  name,
  status,
  species,
  type,
  gender,
}: ParamsProps = {}) => {
  try {
    // Crear un objeto con todos los parámetros
    const allParams = { name, status, species, type, gender };

    // Filtrar los parámetros que no son undefined, null o cadena vacía
    const definedParams = Object.fromEntries(
      Object.entries(allParams).filter(
        ([_, value]) => value !== undefined && value !== null && value !== ''
      )
    );

    // Inicializar las opciones de la solicitud
    const options: any = {};

    // Si hay parámetros definidos, añadirlos a las opciones
    if (Object.keys(definedParams).length > 0) {
      options.params = definedParams;
    }

    // Realizar la solicitud con o sin parámetros
    const response = await axios.get<CharactersAPI>(
      `${import.meta.env.VITE_BASE_URL}/character`,
      options
    );
    return response;
  } catch (error) {
    console.error('Error fetching characters:', error);
  }
};
