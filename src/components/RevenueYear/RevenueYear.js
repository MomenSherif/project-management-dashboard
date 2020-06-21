import React, { Fragment } from 'react';
import CountUp from 'react-countup';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import formatter from '../../helper/currencyFormater';
import useStyles from './RevenueYearStyle';

const RevenueYear = ({ projects }) => {
  const classes = useStyles();

  const totalDoneSum = projects
    .filter((project) => project.state === 'done')
    .map((project) => project.budget)
    .reduce((sum, num) => sum + num, 0);

  const totalSum = projects
    .map((project) => project.budget)
    .reduce((sum, num) => sum + num, 0);

  return (
    <Fragment>
      <Paper className={classes.paper}>
        <Typography variant='subtitle2' color='textSecondary' gutterBottom>
          Revenue this year
        </Typography>
        <Typography variant='h6' className={classes.center}>
          Total/Planned
        </Typography>
        <Typography variant='h6' className={classes.center}>
          <CountUp end={totalDoneSum} duration={1} separator=','></CountUp>/
          <CountUp end={totalSum} duration={1} separator=','></CountUp>
        </Typography>
      </Paper>
    </Fragment>
  );
};

export default RevenueYear;
