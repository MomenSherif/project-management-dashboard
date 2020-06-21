import React, { Fragment } from 'react';
import { Line } from 'react-chartjs-2';
import Paper from '@material-ui/core/Paper';

import useStyles from './RevenueYearChartStyle';
import moment from 'moment';

const RevenueYearChart = ({ projects }) => {
  const classes = useStyles();
  const months = moment.monthsShort();
  const revenues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  const projectsDone = projects.filter(({ state }) => state === 'done');

  for (let i = 0; i < projectsDone.length; i++) {
    const month = moment(projects[i].deadLine).month();
    revenues[month] += projects[i].budget;
  }

  const data = {
    labels: months,
    datasets: [
      {
        label: 'Revenue this year',
        data: revenues,
        backgroundColor: 'rgba(255, 206, 86)',
        borderColor: 'rgba(255, 206, 86)',
        borderWidth: 3,
        fill: false,
      },
    ],
  };

  return (
    <Fragment>
      <Paper className={classes.paper}>
        <Line data={data} width={100} height={50} />
      </Paper>
    </Fragment>
  );
};

export default RevenueYearChart;
