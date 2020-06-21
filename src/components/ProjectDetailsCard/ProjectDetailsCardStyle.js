import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  title: {
    display: 'inline-block',
    marginBottom: theme.spacing(4),
  },
  pos: {
    marginBottom: 12,
  },
  desc: {
    marginLeft: theme.spacing(5),
  },
  mainCard: {
    borderRadius: '10px',
    position: 'inherit',
    top: '10px',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-4px)',
    },
  },
  mainSec: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '10px',
    position: 'relative',
  },
}));

export default useStyles;
