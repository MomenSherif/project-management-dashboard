import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: 'block',
    transition: 'transform 0.2s ease-in-out',

    '&:hover': {
      transform: 'translateY(-4px)',
    },
  },
  card: {
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(4),
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  mt: {
    marginTop: theme.spacing(2),
  },
  flex: {
    display: 'flex',
    alignItems: 'center',

    '& > *': {
      marginRight: '3px',
    },
  },
  createdAt: {
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;
