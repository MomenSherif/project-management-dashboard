import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    height: '100vh',
    backgroundImage: `url('22.png')`,
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  headerText: {
    color: 'white',
    maxWidth: '50%',
  },
  headerLink: {
    marginTop: theme.spacing(4),
    color: '#AC75E3',
    textDecoration: 'none',
    padding: '12px 30px',
    display: 'inline-block',
    border: '2px solid #AC75E3',
    borderRadius: '8px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    transition: 'all .3s',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: '#AC75E3',
      color: '#fff',
    },
    '&:focus': {
      border: '2px solid transparent',
      outline: 0,
    },
  },
  h2: {
    fontWeight: 'bold',
  },
  // mt: {
  //   marginTop: theme.spacing(4),
  // },
}));

export default useStyles;
