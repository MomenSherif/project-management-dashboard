import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 700,
    minHeight: 520,
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      marginTop: '20px',
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: 340,
    },
  },
  mb: {
    marginBottom: '20px',
  },
  titleMargin: {
    marginBottom: '50px',
  },
  paging: {
    position: 'relative',
    left: 220,
    [theme.breakpoints.down('xs')]: {
      left: 75,
    },
  },
  projects: {
    minHeight: '300px',
  },
}));

export default useStyles;
