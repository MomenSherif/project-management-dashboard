import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  navbar: {
    position: 'absolute',
    width: '100%',
    padding: '15px',
    top: 0,
    left: 0,
    // backgroundColor: '#3E2486',
  },
  navContainer: {
    display: 'flex',
    position: 'relative',
  },
  brand: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '20px',
    textTransform: 'uppercase',
    '&:focus': {
      border: 0,
      outline: 0,
    },
  },
  navRight: {
    position: 'absolute',
    right: '30px',
    fontSize: '15px',
    lineHeight: '37px',
  },
  navItem: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 500,
    marginLeft: '20px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    transition: 'all .3s',
    '&:hover': {
      color: '#AC75E3',
    },

    '&:focus': {
      border: 0,
      outline: 0,
    },
  },
}));

export default useStyles;
