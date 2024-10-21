import {
  useEffect, useState,
} from 'react';
import { FuturamaCharacter } from '../types/types';

export default function FuturamaCharactersAPI() {
  const [characters, setCharacters] = useState<FuturamaCharacter[]>([]);
  const [error, setError] = useState<string | null>(null);
  const fetchFuturamaCharacters = async () => {
    try {
      const response = await fetch('https://api.sampleapis.com/futurama/characters');
      const charactersData: FuturamaCharacter[] = await response.json();
      setCharacters(charactersData); // Actualizar el estado con los datos obtenidos
    } catch (fetchError: any) {
      setError(fetchError.message);
    }
  };

  useEffect(() => {
    fetchFuturamaCharacters();
  }, []);

  return { characters, error };
}
