import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 250,
    borderLeft: `10px solid ${theme.palette.primary.dark}`
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
    width: theme.spacing(14),
    height: theme.spacing(14),
    alignSelf: 'center'
  }
}));

export default useStyles;
