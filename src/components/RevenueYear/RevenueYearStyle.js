import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    minHeight: '130px',
  },
  center: {
    textAlign: 'center',
  },
}));

export default useStyles;
