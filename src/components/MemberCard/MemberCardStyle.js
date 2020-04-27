import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
    borderLeft: `10px solid ${theme.palette.primary.main}`
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  title: {
    fontSize: 14
  },
  mb: {
    marginBottom: '15px'
  },
  large: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    alignSelf: 'center'
  }
}));

export default useStyles;
