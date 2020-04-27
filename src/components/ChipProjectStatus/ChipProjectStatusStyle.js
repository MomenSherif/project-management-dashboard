import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  statusColor: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.warning.light,
  },
  statusIconColor: {
    color: theme.palette.common.white,
  },
}));
export default useStyles;
