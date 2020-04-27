import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 700,
    minHeight: 500,
    padding: theme.spacing(4)
  },
  mb: {
    marginBottom: '20px'
  }
}));

export default useStyles;
