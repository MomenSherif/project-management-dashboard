import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 700,
    minHeight: 320,
    padding: theme.spacing(4),
    marginBottom: '10px',
    [theme.breakpoints.down('xs')]: {
      minWidth: 340,
    },
  },
  mb: {
    marginBottom: '20px',
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  addBtn: {
    position: 'fixed',
    bottom: '200px',
    right: '40px',
  },
  paging: {
    position: 'relative',
    left: 220,
    [theme.breakpoints.down('xs')]: {
      left: 75,
    },
  },
}));

export default useStyles;
