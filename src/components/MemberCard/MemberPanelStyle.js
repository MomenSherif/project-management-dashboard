import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 700,
    height: 820,
    padding: theme.spacing(4),
    marginBottom: '10px'
  },
  mb: {
    marginBottom: '20px'
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  addBtn: {
    position: 'fixed',
    bottom: '200px',
    right: '40px'
  },
  paging: {
    position: 'relative',
    left: 220
  }
}));

export default useStyles;
