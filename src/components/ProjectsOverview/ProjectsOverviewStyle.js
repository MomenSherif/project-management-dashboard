import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  subtitle2: {
    color: theme.palette.text.secondary,
  },
  status: {
    borderRadius: theme.spacing(1),
    maxWidth: 'max-content',
  },
  success: {},
}));

export default useStyles;
