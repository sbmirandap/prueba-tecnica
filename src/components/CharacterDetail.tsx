import React from 'react';
import {
  Card, CardContent, Typography, CardMedia, Button, Grid,
} from '@mui/material';
import { CharacterDetailProps } from '../types/types';

export default function CharacterDetail({ character, onClose }: CharacterDetailProps) {
  return (
    <>
      {/* Fondo semi-transparente */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo negro con opacidad
        zIndex: 999,
      }}
      />

      {/* Contenedor principal del detalle */}
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        maxWidth: '900px',
        padding: '20px',
        backgroundColor: '#fff',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        zIndex: 1000,
        justifyContent: 'center',
      }}
      >
        <Grid container spacing={2}>
          {/* Columna de la imagen */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={character.images.main}
                alt={`${character.name.first} ${character.name.last}`}
                style={{ objectFit: 'contain' }}
              />
            </Card>
          </Grid>

          {/* Columna de detalles */}
          <Grid item xs={12} md={6} style={{ }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {`${character.name.first} ${character.name.middle ? `${character.name.middle} ` : ''}${character.name.last}`}
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                {`Especie: ${character.species}`}
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                {`Planeta origen: ${character.homePlanet}`}
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                {`Ocupación: ${character.occupation}`}
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                {`Edad: ${character.age}`}
              </Typography>
              <Button onClick={onClose} style={{ marginTop: '20px', backgroundColor: '#011c3a', color: '#fff' }}>
                Cerrar
              </Button>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
