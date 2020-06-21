import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import ProjectCount from '../components/ProjectCount/ProjectCount';
import TeamCount from '../components/TeamCount/TeamCount';
import ProjectsOverview from '../components/ProjectsOverview/ProjectsOverview';
import TopEmployees from '../components/TopEmployees/TopEmployees';
import RevenueMonth from '../components/RevenueMonth/RevenueMonth';
import RevenueYear from '../components/RevenueYear/RevenueYear';
import RevenueYearChart from '../components/RevenueYearChart/RevenueYearChart';
import TeamsChart from '../components/TeamsChart/TeamsChart';
import { connect } from 'react-redux';

import { getProjects } from '../actions/projects';
import { fetchTeams } from '../actions/teams';

const useStyles = makeStyles((theme) => ({
  pt: {
    paddingTop: theme.spacing(2),
  },
  mb: {
    marginBottom: theme.spacing(3),
  },
}));

const Homepage = ({ projects, teams, auth, getProjects, fetchTeams }) => {
  const classes = useStyles();
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [employees, setEmployees] = useState([]);

  const handleEmployeeAdded = (emp) => {
    setEmployees((prevEmps) => [emp, ...prevEmps]);
  };

  useEffect(() => {
    getProjects().then((res) => {
      setFilteredProjects(
        res.filter((project) => project.state === 'in-progress')
      );
    });

    fetchTeams();

    axios
      .get(`${process.env.REACT_APP_BACKEND_BASE_URL}/employees`)
      .then((res) => {
        setEmployees(res.data);
      });
  }, []);

  return (
    <Container className={classes.pt}>
      <Grid container spacing={3} className={classes.mb}>
        <Grid item xs={12} sm={6} md={3}>
          <ProjectCount count={filteredProjects.length}></ProjectCount>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <RevenueMonth projects={projects}></RevenueMonth>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TeamCount count={teams.length}></TeamCount>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <RevenueYear projects={projects}></RevenueYear>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} className={classes.mb}>
          <TeamsChart teams={teams}></TeamsChart>
        </Grid>
        <Grid item xs={12} md={6} className={classes.mb}>
          <RevenueYearChart projects={projects}></RevenueYearChart>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.mb}>
          <ProjectsOverview projects={projects.slice(0, 5)}></ProjectsOverview>
        </Grid>
        <Grid item xs={12} className={classes.mb}>
          <TopEmployees
            employees={employees.slice(0, 5)}
            role={auth.role}
            handleEmployeeAdded={handleEmployeeAdded}
          ></TopEmployees>
        </Grid>
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    teams: state.teams,
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getProjects: () => dispatch(getProjects()),
  fetchTeams: () => dispatch(fetchTeams()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
