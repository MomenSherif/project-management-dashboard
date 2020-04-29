import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import ProjectCount from '../components/ProjectCount/ProjectCount';
import TeamCount from '../components/TeamCount/TeamCount';
import ProjectsOverview from '../components/ProjectsOverview/ProjectsOverview';
import RevenueMonth from '../components/RevenueMonth/RevenueMonth';
import RevenueYear from '../components/RevenueYear/RevenueYear';
import RevenueYearChart from '../components/RevenueYearChart/RevenueYearChart';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  pt: {
    paddingTop: theme.spacing(2),
  },
}));

const Homepage = ({ projects, teams }) => {
  const classes = useStyles();

  return (
    <Container className={classes.pt}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <ProjectCount count={projects.length}></ProjectCount>
        </Grid>
        <Grid item xs={3}>
          <RevenueMonth></RevenueMonth>
        </Grid>
        <Grid item xs={3}>
          <TeamCount count={teams.length}></TeamCount>
        </Grid>
        <Grid item xs={3}>
          <RevenueYear></RevenueYear>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item md={6}>
          <ProjectsOverview></ProjectsOverview>
        </Grid>
        <Grid item md={6}>
          <RevenueYearChart></RevenueYearChart>
        </Grid>
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    teams: state.teams,
  };
};

export default connect(mapStateToProps)(Homepage);
