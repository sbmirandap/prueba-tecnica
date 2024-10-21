import React, {
  useState, useEffect,
} from 'react';
import {
  Box, Grid, Typography,
} from '@mui/material';
import FuturamaCharactersAPI from '../services/api';
import { FuturamaCharacter } from '../types/types';
import CharacterCard from './CharacterCard';
import SearchAndSort from './SearchAndSort';
import CharacterDetail from './CharacterDetail';

export default function Marketplace() {
  const { characters, error } = FuturamaCharactersAPI();
  const [filteredCharacters, setFilteredCharacters] = useState<FuturamaCharacter[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<FuturamaCharacter | null>(null);
  // Manejar el clic en una tarjeta de personaje
  const handleCharacterClick = (character: FuturamaCharacter) => {
    setSelectedCharacter(character); // Almacenar el personaje seleccionado
  };
  if (error) {
    return (
      <Box sx={{ padding: 2 }}>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Error:
          {error}
        </Typography>
      </Box>
    );
  }

  useEffect(() => {
    // Cuando `characters` cambie, actualizar `filteredCharacters`
    if (characters.length > 0) {
      setFilteredCharacters(characters); // Mostrar todos los personajes al principio
    }
  }, [characters]);

  const handleSearch = (filtered: FuturamaCharacter[]) => {
    setFilteredCharacters(filtered);
  };

  const handleDetailClose = () => {
    setSelectedCharacter(null); // Limpiar la selección de personaje
  };

  if (error) {
    return (
      <Box sx={{ padding: 2 }}>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Error:
          {error}
        </Typography>
      </Box>
    );
  }
  return (
    <Box sx={{ padding: 2 }}>
      {/* Si hay un personaje seleccionado, mostrar el detalle */}
      {selectedCharacter ? (
        <CharacterDetail character={selectedCharacter} onClose={handleDetailClose} />
      ) : (
        <>
          <SearchAndSort characters={characters} onSearch={handleSearch} />
          <Grid container spacing={3}>
            {filteredCharacters.map((character) => (
              <Grid item xs={12} sm={6} md={3} key={character.id}>
                <CharacterCard character={character} onClick={handleCharacterClick} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
}
