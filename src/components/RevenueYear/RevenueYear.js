import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    minHeight: '130px',
  },
  center: {
    textAlign: 'center',
  },
}));

const RevenueYear = (props) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Paper className={classes.paper}>
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          Revenue this year
        </Typography>
        <Typography variant="h6" className={classes.center}>
          Total/Planned
        </Typography>
        <Typography variant="h6" className={classes.center}>
          102,400/150,000
        </Typography>
      </Paper>
    </Fragment>
  );
};

export default RevenueYear;
