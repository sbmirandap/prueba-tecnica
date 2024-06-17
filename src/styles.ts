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
}));

export default useStyles;
