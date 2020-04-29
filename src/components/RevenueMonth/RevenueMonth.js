import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import useStyles from './RevenueMonthStyle';

const RevenueMonth = (props) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Paper className={classes.paper}>
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          Revenue this month
        </Typography>
        <Typography variant="h6" className={classes.center}>
          Total/Planned
        </Typography>
        <Typography variant="h6" className={classes.center}>
          15,600/50,000
        </Typography>
      </Paper>
    </Fragment>
  );
};

export default RevenueMonth;
