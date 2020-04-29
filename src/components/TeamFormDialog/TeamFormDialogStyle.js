import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  addBtn: {
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
