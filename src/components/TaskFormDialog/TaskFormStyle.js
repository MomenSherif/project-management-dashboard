import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 250,
    maxHeight: 350,
    borderLeft: `10px solid ${theme.palette.primary.dark}`
  },
  formControl: {
    margin: theme.spacing(1)
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  assignBtn: {
    position: 'fixed',
    bottom: '40px',
    right: '40px'
  },
  submitBtn: {
    display: 'block',
    marginLeft: 'auto',
    marginTop: '16px'
  }
}));

export default useStyles;
