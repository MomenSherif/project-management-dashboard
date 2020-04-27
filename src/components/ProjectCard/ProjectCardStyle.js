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
  },
}));

export default useStyles;
