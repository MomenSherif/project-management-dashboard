import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  card: {
    margin: '10px',
    borderLeft: `5px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(1),
    '&:hover': { boxShadow: '0 5px 15px rgba(0,0,0,0.3)' },
    transition: 'transition: all .2s ease-in-out;',
  },
  cardHeader: {
    padding: theme.spacing(2),
  },
  cardContent: {},
  spanTextColor: {
    color: theme.palette.primary.main,

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
    borderRadius: '20px',
    position: 'inherit',
    top: '25px',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-4px)',
    },
  },
  mainSec: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '20px',
    position: 'relative',
  },
}));

export default useStyles;
