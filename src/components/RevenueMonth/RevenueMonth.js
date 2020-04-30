import React, { Fragment } from 'react';
import CountUp from 'react-countup';
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
          <CountUp end={15600} duration={1} separator=","></CountUp>/
          <CountUp end={50000} duration={1} separator=","></CountUp>
        </Typography>
      </Paper>
    </Fragment>
  );
};

export default RevenueMonth;
