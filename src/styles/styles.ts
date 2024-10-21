import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: 'white',
    color: 'black',
  },
  buttonsContainer: {
    margin: 15,
    columnGap: 15,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
  navbar: {
    backgroundColor: '#333', // Color base de tu Navbar
    color: '#fff',
    padding: '10px 20px',
  },
  marketplaceContainer: {
    backgroundColor: '#f5f5f5', // Fondo claro para contraste
    padding: '20px',
    minHeight: '100vh', // Para llenar toda la pantalla
  },
}));

export default useStyles;
