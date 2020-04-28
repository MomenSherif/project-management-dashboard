import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  statusInReviewColor: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.warning.main,
  },
  statusInReviewIconColor: {
    color: theme.palette.common.white,
  },
  statusDoneColor: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.success.main,
  },
  statusDoneIconColor: {
    color: theme.palette.common.white,
  },
}));
export default useStyles;
