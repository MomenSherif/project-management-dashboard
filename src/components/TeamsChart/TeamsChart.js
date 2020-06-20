import React, { Fragment } from 'react';
import { Pie } from 'react-chartjs-2';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import useStyles from './TeamsChartStyle';

const TeamsChart = ({ teams }) => {
  const classes = useStyles();

  // console.log(teams);

  const teamsNames = teams.map((team) => team.name);
  const teamsCount = teams.map((team) => team.employees?.length);

  const data = {
    labels: teamsNames,
    datasets: [
      {
        data: teamsCount,
        backgroundColor: [
          'rgba(54, 162, 235)',
          'rgba(255, 99, 132)',
          'rgba(255, 205, 86)',
          'rgba(255, 145, 36)',
          'rgba(34, 206, 206)',
        ],
      },
    ],
  };

  return (
    <Fragment>
      <Paper className={classes.paper}>
        <Typography variant='subtitle2' color='textSecondary' gutterBottom>
          Employees per team
        </Typography>
        <Pie data={data} width={100} height={50} />
      </Paper>
    </Fragment>
  );
};

export default TeamsChart;
