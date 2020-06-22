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
import CircularProgress from '@material-ui/core/CircularProgress';

import ProjectCard from '../components/ProjectCard/ProjectCard';
import ProjectFormDialog from '../components/ProjectFormDialog/ProjectFormDialog';
import { getProjects } from '../actions/projects';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '98%',
    boxShadow: '0 3px 10px rgba(0,0,0,0.3)',
    margin: 'auto',
  },
  paper: {
    position: 'relative',
  },
  paging: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
  progress: {
    left: '50%',
    top: '300px',
    marginLeft: '-4em',
    position: 'absolute',
  },
}));

const Project = ({ projects, pages, pageSize, getProjects, role }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(pages);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [load, setLoad] = useState(true);
  const firstCardInPage = pageSize * (page - 1);
  const projectStatusArr = ['in-progress', 'in-review', 'done'];

  useEffect(() => {
    getProjects().then((res) => {
      setFilteredProjects(res.slice(0, pageSize));
      setLoad(false);
    });
    // .catch((error) => history.push('/error'));
  }, []);
  useEffect(() => {
    if (value === 0) {
      setNumOfPages(Math.ceil(projects.length / pageSize));
      setFilteredProjects(projects);
      return;
    }

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
    window.scrollTo({
      top: 500,
      left: 0,
      behavior: 'smooth',
    });
  };

  const projectList = filteredProjects
    .slice(firstCardInPage, firstCardInPage + pageSize)
    .map((project) => (
      <Grid item key={project._id} xs={12}>
        <ProjectCard project={project} />
      </Grid>
    ));

  let pageLoading = (
    <div className={classes.progress}>
      <CircularProgress color='primary' thickness={4} size={100} />
    </div>
  );
  if (!load) {
    pageLoading = (
      <Grid container spacing={1} direction='row' justify='center'>
        {projectList}
        {numOfPages > 1 && (
          <Grid item className={classes.paging}>
            <Pagination
              count={numOfPages}
              onChange={handelPagination}
              color='primary'
              page={page}
            />
          </Grid>
        )}
      </Grid>
    );
  }

  return (
    <Container className={classes.paper}>
      <Typography variant='h2' gutterBottom align='center'>
        Projects
      </Typography>
      <Paper square className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant='fullWidth'
          indicatorColor='primary'
          textColor='primary'
          aria-label='icon label tabs example'
        >
          <Tab icon={<GitHubIcon />} label='ALL' />
          <Tab icon={<AutoRenewIcon />} label='IN PROGRESS' />
          <Tab icon={<RateReviewIcon />} label='IN REVIEW' />
          <Tab icon={<DoneIcon />} label='DONE' />
        </Tabs>
      </Paper>
      {pageLoading}
      {role === 'business-owner' && <ProjectFormDialog />}
    </Container>
  );
};

const mapStateToProps = (state, ownPops) => ({
  projects: state.projects,
  pages: state.projects.length / ownPops.pageSize,
  role: state.auth.role,
});

const mapDispatchToProps = (dispatch) => ({
  getProjects: () => dispatch(getProjects()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);
