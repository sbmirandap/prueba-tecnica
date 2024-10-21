import React, { useState } from 'react';
import {
  TextField, Select, MenuItem, InputLabel, FormControl, Button, Typography,
} from '@mui/material';
import { FuturamaCharacter } from '../types/types';

export default function SearchAndSort({ characters, onSearch }: {
    characters: FuturamaCharacter[],
    onSearch: (filteredCharacters: FuturamaCharacter[]) => void}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name'); // Ordenar por nombre como predeterminado
  const handleSearch = () => {
    // Filtrar personajes por el término de búsqueda (nombre)
    let filteredCharacters = characters.filter((character) => `${character.name.first} ${character.name.last}`.toLowerCase().includes(searchTerm.toLowerCase()));
    // Ordenar personajes según el criterio seleccionado
    if (sortBy === 'name') {
      filteredCharacters = filteredCharacters.sort(
        (a, b) => a.name.first.localeCompare(b.name.first),
      );
    } else if (sortBy === 'species') {
      filteredCharacters = filteredCharacters.sort((a, b) => a.species.localeCompare(b.species));
    } else if (sortBy === 'ageAsc') {
      filteredCharacters = filteredCharacters.sort((a, b) => a.age - b.age);
    } else if (sortBy === 'genderFemale') {
      filteredCharacters = filteredCharacters.filter((character) => character.gender === 'Female');
    } else if (sortBy === 'genderMale') {
      filteredCharacters = filteredCharacters.filter((character) => character.gender === 'Male');
    } else if (sortBy === 'ageDesc') {
      filteredCharacters = filteredCharacters.sort((a, b) => b.age - a.age);
    }
    // Pasar los personajes filtrados al componente padre
    onSearch(filteredCharacters);
  };
  return (
    <div style={{
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between', // Para alinear el título a la izquierda y los controles a la derecha
      paddingRight: '10px',
      borderBottom: '4px solid',
      borderBottomStyle: 'solid',
      borderBottomColor: '#011c3a',
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
    }}
    >
      {/* Título alineado a la izquierda */}
      <Typography
        variant="h6"
        style={{
          marginLeft: '20px',
          fontWeight: 800,
          color: '#FF007F',
          marginBottom: '10px',
        }}
      >
        Marketplace Personajes Futurama
      </Typography>
      {/* Controles del buscador y orden */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          label="Buscar por nombre"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginRight: '10px', width: '250px', marginBottom: '10px' }}
        />
        <FormControl
          variant="outlined"
          style={{
            marginRight: '10px',
            width: '150px',
            textAlign: 'justify',
            marginBottom: '10px',
          }}
        >
          <InputLabel id="sort-label">Ordenar por</InputLabel>
          <Select
            labelId="sort-label"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as string)}
            label="Ordenar por"
          >
            <MenuItem value="name">Nombre</MenuItem>
            <MenuItem value="species">Especie</MenuItem>
            <MenuItem value="ageAsc">Edad: Menor a mayor</MenuItem>
            <MenuItem value="ageDesc">Edad: Mayor a menor</MenuItem>
            <MenuItem value="genderFemale">Sexo: Femenino</MenuItem>
            <MenuItem value="genderMale">Sexo: Masculino</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="outlined"
          sx={{
            borderColor: '#FF007F',
            color: 'white',
            backgroundColor: '#011c3a',
            height: '55px',
            marginBottom: '10px',
            '&:Hover': {
              backgroundColor: '#011c3a',
            },
          }}
          onClick={handleSearch}
        >
          Buscar
        </Button>
      </div>
    </div>
  );
}
