import React from 'react';
import {
  AppBar, Toolbar, Typography, Button, Box,
} from '@mui/material';
import logo from '../assets/bancame_logo_white.svg'; // Asegúrate de que la ruta sea correcta

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#011c3a' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          {/* Logo */}
          <Typography variant="h6" component="div" sx={{ display: 'inline', marginRight: 2, marginTop: 2 }}>
            <img src={logo} alt="Banca.Me Logo" style={{ height: '50px' }} />
          </Typography>

          {/* Menú de navegación */}
          <Button sx={{ color: 'white', marginRight: 2 }}>
            Personas
          </Button>
          <Button sx={{ color: 'white', marginRight: 2 }}>
            Empresas
          </Button>
          <Button sx={{ color: 'white', marginRight: 2 }}>
            Nosotros
          </Button>
          <Button sx={{ color: 'white', marginRight: 2 }}>
            Blog
          </Button>
        </Box>

        {/* Botón de Portal Cliente */}
        <Button variant="outlined" sx={{ borderColor: '#FF007F', color: 'white' }}>
          Portal cliente
        </Button>
      </Toolbar>
    </AppBar>
  );
}
