import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  bgWhite: {
    backgroundColor: 'white',
    marginTop: '12px',
  },
  featureContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  featureDesc: {
    lineHeight: 2,
    color: '#7a7f88',
  },
  featureImage: {
    maxWidth: '100%',
  },
  underlined: {
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      bottom: '4px',
      width: '100%',
      borderBottom: '3px solid #AC75E3',
    },
  },
  bold: {
    fontWeight: 'bold',
  },
  mt: {
    marginTop: theme.spacing(4),
  },
}));

export default useStyles;
