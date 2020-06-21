import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 360,
    padding: theme.spacing(4),
  },
  flexCol: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  m: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px',
  },
  // mr: {
  //   marginRight: '40px',
  // },
  margin: {
    margin: theme.spacing(1),
  },
  box: {
    // backgroundColor: ' #F3F7FA',
    padding: '4px 16px',
    border: 1,
    marginBottom: '20px',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
  },
  createdAt: {
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;
