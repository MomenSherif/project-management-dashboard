import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    position: 'relative',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    transition: 'transform 0.6s',
    transformStyle: 'preserve-3d',
  },
  planContainer: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  flipCard: {
    backgroundColor: 'transparent',
    height: '600px',
    perspective: '2000px',
    color: '#173D50',
    // '&:hover $flipCardInner': {
    //   transform: 'rotateY(180deg)',
    // },
  },
  flipCardInner: {
    textAlign: 'center',
    position: 'relative',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    transition: 'transform 0.6s',
    transformStyle: 'preserve-3d',
  },
  flipCardFront: {
    padding: theme.spacing(2),
    backgroundColor: 'white',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    outline: '1px solid rgba(0, 0, 0, 0.1)',
  },
  flipCardBack: {
    padding: theme.spacing(2),
    backgroundColor: 'white',
    color: 'black',
    outline: '1px solid rgba(0, 0, 0, 0.1)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    transform: 'rotateY(180deg)',
  },
  planTitle: {
    marginTop: '30px',
    marginBottom: '30px',
    textTransform: 'uppercase',
  },

  currency: {
    color: '#AC75E3',
    fontWeight: 700,
    display: 'inline-block',
    marginTop: '25px',
    marginRight: '5px',
    verticalAlign: 'top',
    fontSize: '15px',
  },
  value: {
    fontSize: '70px',
    fontWeight: 300,
  },
  duration: {
    color: '#AC75E3',
    textTransform: 'uppercase',
    fontWeight: 700,
  },
  pricingFeatures: {
    listStyle: 'none',
    paddingLeft: 0,
    marginTop: '20px',
    marginBottom: '20px',
    fontSize: '15px',
    lineHeight: 3,
    '& $em': {
      fontWeight: 600,
      fontStyle: 'normal',
    },
  },
  link: {
    color: '#AC75E3',
    textDecoration: 'none',
    padding: '18px 0',
    width: '75%',
    display: 'inline-block',
    border: '2px solid #AC75E3',
    borderRadius: '8px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    transition: 'all .3s',
    '&:hover': {
      backgroundColor: '#AC75E3',
      color: '#fff',
    },
    '&:focus': {
      border: '2px solid transparent',
      outline: 0,
    },
  },
  premium: {
    '& $planTitle, $value': {
      color: '#AC75E3',
    },
    '& $currency, $duration': {
      color: '#173D50',
    },
    '& $link': {
      backgroundColor: '#AC75E3',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#fff',
        color: '#AC75E3',
      },
    },
  },
}));

export default useStyles;
