import React, {
  useState, useEffect,
} from 'react';
import {
  Card, CardContent, Typography, CardMedia,
} from '@mui/material';
import {
  FuturamaCharacter,
  CharacterCardProps,
} from '../types/types';
import avatarExcited from '../assets/avatar_excited.svg';
import avatarHappy from '../assets/avatar_smiling.svg';

export default function CharacterCard({ character, onClick }: CharacterCardProps) {
  const [imageSrc, setImageSrc] = useState(character.images.main);
  const handleClick = () => {
    onClick(character);
  };
  return (
    <Card
      onClick={handleClick}
      sx={{
        borderRadius: '30px', // Esquinas redondeadas
        borderColor: '#FF007F',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Sombra suave
        backgroundColor: '#ffffff', // Fondo blanco
        textAlign: 'left', // Alineado a la izquierda
        margin: '10px', // Margen alrededor de cada card
        maxWidth: '4000px', // Ajustar el ancho máximo
        '&:hover': {
          borderColor: '#FF007F',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)', // Sombra más pronunciada al pasar el mouse
        },
        '&:active': {
          transform: 'scale(0.98)', // Efecto de clic
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)', // Sombra más pronunciada al hacer clic
        },
      }}
    >
      <CardMedia
        component="img"
        height="300"
        image={imageSrc} // Usar la imagen del personaje
        alt={`${character.name.first} ${character.name.last}`}
        style={{ objectFit: 'contain' }}
      />
      <CardContent>
        <Typography>
          {`${character.name.first} ${character.name.middle ? `${character.name.middle} ` : ''}${character.name.last}`}
        </Typography>
      </CardContent>
    </Card>
  );
}