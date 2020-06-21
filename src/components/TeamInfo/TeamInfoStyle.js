import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 360,
    padding: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      minWidth: 340,
    },
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  m: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px',
  },
  mr: {
    marginRight: '40px',
  },
  mt: {
    marginTop: '10px',
  },
  avatar: {
    backgroundColor: theme.palette.primary.dark,
    alignSelf: 'center',
  },
  box: {
    padding: '10px',
    border: 1,
  },
  paper: {
    padding: '20px',
    borderLeft: `6px solid ${theme.palette.primary.dark} `,
  },
}));

export default useStyles;
