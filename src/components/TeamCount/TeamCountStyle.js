import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    minHeight: '130px',
  },
  center: {
    textAlign: 'center',
  },
  projectCount: {
    display: 'inline-block',
    borderRadius: '50%',
    border: `5px solid`,
    borderColor: theme.palette.primary.light,
    width: theme.spacing(7),
    height: theme.spacing(7),
    lineHeight: `45px`,
  },
}));

export default useStyles;