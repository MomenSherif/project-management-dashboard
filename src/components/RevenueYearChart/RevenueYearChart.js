import React, { Fragment } from 'react';
import { Line } from 'react-chartjs-2';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
}));

const RevenueYearChart = (props) => {
  const classes = useStyles();

  const data = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        label: 'Revenue this year',
        data: [13400, 15210, 12600, 6000, 8000, 11700, 12100, 10800],
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
