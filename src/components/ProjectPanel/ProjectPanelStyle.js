import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 700,
    height: 520,
    padding: theme.spacing(4)
  },
  mb: {
    marginBottom: '20px'
  },
  paging: {
    position: 'relative',
    left: 220
  }
}));

export default useStyles;
