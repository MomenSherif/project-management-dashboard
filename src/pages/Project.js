import React from 'react';
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
import AutorenewIcon from '@material-ui/icons/Autorenew';
import RateReviewIcon from '@material-ui/icons/RateReview';

import ProjectCard from '../components/ProjectCard/ProjectCard';
import ProjectFormDialog from '../components/ProjectFormDialog/ProjectFormDialog';
// import { GetProjectsByStatus } from '../actions/projects';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '98%',
    boxShadow: '0 3px 10px rgba(0,0,0,0.3)',
    margin: 'auto',
  },
  pagging: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Project = ({ projects }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [filteredProjects, setFilteredProjects] = React.useState(projects);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 1:
        setFilteredProjects(
          projects.filter((project) => project.state === 'in-progress')
        );
        break;
      case 2:
        setFilteredProjects(
          projects.filter((project) => project.state === 'in-review')
        );

        break;
      case 3:
        setFilteredProjects(
          projects.filter((project) => project.state === 'done')
        );
        break;
      default:
        setFilteredProjects(projects);
        break;
    }
  };
  const projectList = filteredProjects.map((project) => (
    <Grid item key={project.id} xs={12}>
      <ProjectCard project={project} />
    </Grid>
  ));
  return (
    <Container>
      <Typography variant="h3" gutterBottom align="center" color="primary">
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
          <Tab icon={<AutorenewIcon />} label="ALL" />
          <Tab icon={<AutorenewIcon />} label="IN PROGRESS" />
          <Tab icon={<RateReviewIcon />} label="IN REVIEW" />
          <Tab icon={<DoneIcon />} label="DONE" />
        </Tabs>
      </Paper>
      <Grid container spacing={1} direction="row" justify="center">
        {projectList}
        <Grid item className={classes.pagging}>
          <Pagination count={10} color="primary" />
        </Grid>
      </Grid>
      <ProjectFormDialog />
    </Container>
  );
};
const mapStateToProps = (state) => ({
  projects: state.projects,
});

export default connect(mapStateToProps)(Project);
