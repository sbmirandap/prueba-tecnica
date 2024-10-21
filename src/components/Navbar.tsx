import React from 'react';
import {
  AppBar, Toolbar, Typography, Button, Box,
} from '@mui/material';
import logo from '../assets/bancame_logo_white.svg'; // Asegúrate de que la ruta sea correcta

export default function Navbar() {
  const linkLogo = 'https://www.banca.me/';
  const linkBlog = 'https://www.banca.me/blog';
  const linkNosotros = 'https://www.banca.me/quienes-somos';
  const linkEmpresas = 'https://www.banca.me/empresas';
  const linkPersonas = 'https://www.banca.me/personas';
  const linkPortalCliente = 'https://creditos.banca.me/account/login';

  return (
    <AppBar position="static" sx={{ backgroundColor: '#011c3a' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          {/* Logo */}
          <Typography variant="h6" component="div" sx={{ display: 'inline', marginRight: 2, marginTop: 2 }}>
            <a href={linkLogo} target="_blank" rel="noopener noreferrer">
              <img src={logo} alt="Banca.Me Logo" style={{ height: '50px' }} />
            </a>
          </Typography>

          {/* Menú de navegación */}
          <Button href={linkPersonas} sx={{ color: 'white', marginRight: 2, fontWeight: 500 }}>
            Personas
          </Button>
          <Button href={linkEmpresas} sx={{ color: 'white', marginRight: 2, fontWeight: 500 }}>
            Empresas
          </Button>
          <Button href={linkNosotros} sx={{ color: 'white', marginRight: 2, fontWeight: 500 }}>
            Nosotros
          </Button>
          <Button href={linkBlog} sx={{ color: 'white', marginRight: 2, fontWeight: 500 }}>
            Blog
          </Button>
        </Box>

        {/* Botón de Portal Cliente */}
        <Button
          variant="outlined"
          href={linkPortalCliente}
          sx={{ borderColor: '#FF007F', color: 'white', fontWeight: 500 }}
        >
          Portal cliente
        </Button>
      </Toolbar>
    </AppBar>
  );
}
