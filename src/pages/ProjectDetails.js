import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import CreateIcon from '@material-ui/icons/Create';
import AssignmentIcon from '@material-ui/icons/Assignment';
import BusinessIcon from '@material-ui/icons/Business';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ScheduleIcon from '@material-ui/icons/Schedule';
import TimelineIcon from '@material-ui/icons/Timeline';
import GroupIcon from '@material-ui/icons/Group';
import DeleteIcon from '@material-ui/icons/Delete';

import ProjectDetailsCard from '../components/ProjectDetailsCard/ProjectDetailsCard';
import ProjectFormDialog from '../components/ProjectFormDialog/ProjectFormDialog';
import { toggleTeam, deleteProject, getProjectById } from '../actions/projects';

import moment from 'moment';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  deleteBtn: {
    right: '40px',
    bottom: '112px',
    position: 'fixed',
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  progress: {
    left: '50%',
    top: '300px',
    marginLeft: '-4em',
    position: 'absolute',
  },
}));

const ProjectDetails = ({
  teams,
  toggleTeam,
  match,
  deleteProject,
  history,
  getProjectById,
}) => {
  const [switchState, setSwitchState] = useState(false);
  const [project, setProject] = useState(null);
  const [load, setLoad] = useState(true);

  const classes = useStyles();
  useEffect(() => {
    console.log(teams);

    getProjectById().then((res) => {
      debugger;
      console.log(res.data);

      setProject(res.data);
      const switchBtnsState = teams.length
        ? teams.reduce((acc, team) => {
            acc[`teamCheck-${team.id}`] = res.data?.teams?.includes(team.id)
              ? true
              : false;
            return acc;
          }, {})
        : false;
      setSwitchState(switchBtnsState);
      setLoad(false);
    });
  }, []);

  const handleChange = (event) => {
    setSwitchState({
      ...switchState,
      [event.target.name]: event.target.checked,
    });
    toggleTeam(+event.target.value, +match.params.id);
    if (event.target.checked) {
      toast.success('Team assigned successfuly to this project');
    } else {
      toast.warn('Team removed!');
    }
  };

  const handleDeleteProject = () => {
    deleteProject();
    history.replace('/projects');
    toast.success(`Project ${project?.title} deleted succ`);
  };

  let pageLoading = (
    <div className={classes.progress}>
      <CircularProgress color="primary" thickness={4} size={100} />
    </div>
  );
  if (!load) {
    pageLoading = (
      <Fragment>
        <Typography variant="h2" gutterBottom align="center">
          Project Overview
        </Typography>
        <Grid container justify="space-evenly" spacing={6}>
          <Grid item xs={12} md={6}>
            <ProjectDetailsCard
              title="Project Name"
              description={project.title}
            >
              <CreateIcon
                color="secondary"
                fontSize="large"
                className={classes.icon}
              ></CreateIcon>
            </ProjectDetailsCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <ProjectDetailsCard title="Organization/Company" description="ITI">
              <BusinessIcon
                color="secondary"
                fontSize="large"
                className={classes.icon}
              />
            </ProjectDetailsCard>
          </Grid>
          <Grid item xs={12}>
            <ProjectDetailsCard
              title="Description"
              description={project.description}
            >
              <AssignmentIcon
                color="secondary"
                fontSize="large"
                className={classes.icon}
              />
            </ProjectDetailsCard>
          </Grid>
          <Grid item xs={12} md={3} sm={6}>
            <ProjectDetailsCard title="Budget" description={project.budget}>
              <MonetizationOnIcon
                color="secondary"
                fontSize="large"
                className={classes.icon}
              />
            </ProjectDetailsCard>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ProjectDetailsCard title="State" description={project.state}>
              <TimelineIcon
                color="secondary"
                fontSize="large"
                className={classes.icon}
              />
            </ProjectDetailsCard>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ProjectDetailsCard
              title="Deadline"
              description={
                <time
                  date={moment(new Date(project.deadLine)).format('YYYY-MM-DD')}
                >
                  {moment(new Date(project.deadLine)).format('D MMMM YYYY')}
                </time>
              }
            >
              <ScheduleIcon
                color="secondary"
                fontSize="large"
                className={classes.icon}
              />
            </ProjectDetailsCard>
          </Grid>
          <Grid item xs={12}>
            <ProjectDetailsCard
              title="Teams"
              description={teams.map((team) => (
                <Grid container alignItems="center" key={team.id} spacing={3}>
                  <Grid item>
                    <Avatar
                      title={team.name}
                      variant="rounded"
                      className={classes.avatar}
                    >
                      {team.name.charAt(0)}
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">{team.name}</Typography>
                  </Grid>
                  <Grid item>
                    <Switch
                      checked={switchState[`teamCheck-${team.id}`]}
                      onChange={handleChange}
                      name={`teamCheck-${team.id}`}
                      value={team.id}
                      inputProps={{ 'team-id': team.id }}
                    />
                  </Grid>
                </Grid>
              ))}
            >
              <GroupIcon
                color="secondary"
                fontSize="large"
                className={classes.icon}
              />
            </ProjectDetailsCard>
          </Grid>
        </Grid>
        <ProjectFormDialog isEdit={true} editingProject={project} />
        <Fab
          color="primary"
          aria-label="delete"
          className={classes.deleteBtn}
          onClick={handleDeleteProject}
        >
          <DeleteIcon />
        </Fab>
      </Fragment>
    );
  }

  return <Container>{pageLoading}</Container>;
};

const mapStateToProps = (state, ownProps) => {
  const index = state.projects.findIndex(
    (proj) => proj._id === +ownProps.match.params.id
  );
  return {
    // project: state.projects[index],
    teams: state.teams,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleTeam: (teamId, projectId) => dispatch(toggleTeam(teamId, projectId)),
  deleteProject: () => dispatch(deleteProject(ownProps.match.params.id)),
  getProjectById: () => dispatch(getProjectById(ownProps.match.params.id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
