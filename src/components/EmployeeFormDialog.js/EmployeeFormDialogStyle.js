import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  addBtn: {
    display: 'flex',
    margin: 'auto',
    marginTop: '16px',
  },
  submitBtn: {
    display: 'block',
    marginLeft: 'auto',
    marginTop: '16px',
  },
  autocomplete: {
    // width: '300',
    marginTop: '30px',
  },
}));

export default useStyles;
