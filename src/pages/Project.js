import React, { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DoneIcon from '@material-ui/icons/Done';
import AutoRenewIcon from '@material-ui/icons/Autorenew';
import RateReviewIcon from '@material-ui/icons/RateReview';
import GitHubIcon from '@material-ui/icons/GitHub';

import ProjectCard from '../components/ProjectCard/ProjectCard';
import ProjectFormDialog from '../components/ProjectFormDialog/ProjectFormDialog';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '98%',
    boxShadow: '0 3px 10px rgba(0,0,0,0.3)',
    margin: 'auto',
  },
  paging: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Project = ({ projects, pages, pageSize }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(pages);
  const [filteredProjects, setFilteredProjects] = useState(
    projects.slice(0, pageSize)
  );
  const firstCardInPage = pageSize * (page - 1);
  const projectStatusArr = ['in-progress', 'in-review', 'done'];

  useEffect(() => {
    if (value === 0)
      return setNumOfPages(Math.ceil(projects.length / pageSize));

    setNumOfPages(Math.ceil(filteredProjects.length / pageSize));
  }, [filteredProjects]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setPage(1);

    if (newValue === 0) return setFilteredProjects(projects);

    setFilteredProjects(
      projects.filter(
        (project) => project.state === projectStatusArr[newValue - 1]
      )
    );
  };

  const handelPagination = (event, page) => {
    setPage(page);
  };

  const projectList = filteredProjects
    .slice(firstCardInPage, firstCardInPage + pageSize)
    .map((project) => (
      <Grid item key={project.id} xs={12}>
        <ProjectCard project={project} />
      </Grid>
    ));
  return (
    <Container>
      <Typography variant="h2" gutterBottom align="center">
        Projects
      </Typography>
      <Paper square className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="icon label tabs example"
        >
          <Tab icon={<GitHubIcon />} label="ALL" />
          <Tab icon={<AutoRenewIcon />} label="IN PROGRESS" />
          <Tab icon={<RateReviewIcon />} label="IN REVIEW" />
          <Tab icon={<DoneIcon />} label="DONE" />
        </Tabs>
      </Paper>
      <Grid container spacing={1} direction="row" justify="center">
        {projectList}
        <Grid item className={classes.paging}>
          <Pagination
            count={numOfPages}
            onChange={handelPagination}
            color="primary"
            page={page}
          />
        </Grid>
      </Grid>
      <ProjectFormDialog />
    </Container>
  );
};
const mapStateToProps = (state, ownPops) => ({
  projects: state.projects,
  pages: state.projects.length / ownPops.pageSize,
});

export default connect(mapStateToProps)(Project);
