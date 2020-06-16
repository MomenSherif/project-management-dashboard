import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
  },
  menuItem: {
    marginRight: theme.spacing(1),
  },
  navBar: {
    marginBottom: theme.spacing(2),
  },
  toolBar: {
    flexGrow: 1,
  },
}));

export default useStyles;
