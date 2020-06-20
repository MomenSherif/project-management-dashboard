import React, { Fragment } from 'react';
import CountUp from 'react-countup';
import moment from 'moment';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import useStyles from './RevenueMonthStyle';

const RevenueMonth = ({ projects }) => {
  const classes = useStyles();

  const monthDoneSum = projects
    .filter(
      (p) =>
        moment(p.deadLine).format('MMM') === moment(new Date()).format('MMM')
    )
    .filter((p) => p.state === 'done')
    .map((p) => p.budget)
    .reduce((sum, num) => sum + num, 0);

  const monthSum = projects
    .filter(
      (p) =>
        moment(p.deadLine).format('MMM') === moment(new Date()).format('MMM')
    )
    .map((p) => p.budget)
    .reduce((sum, num) => sum + num, 0);

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
          <CountUp end={monthDoneSum} duration={1} separator=","></CountUp>/
          <CountUp end={monthSum} duration={1} separator=","></CountUp>
        </Typography>
      </Paper>
    </Fragment>
  );
};

export default RevenueMonth;
