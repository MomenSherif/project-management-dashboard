import React from 'react';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';

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
import TeamCard from '../components/TeamCard/TeamCard';
import { toggleTeam, deleteProject } from '../actions/projects';

import moment from 'moment';
import { toast } from 'react-toastify';

const ProjectDetails = ({
  project,
  teams,
  toggleTeam,
  match,
  deleteProject,
  history,
}) => {
  const switchBtnsState = teams.reduce((acc, team) => {
    acc[`teamCheck-${team.id}`] = project.teams.includes(team.id)
      ? true
      : false;
    return acc;
  }, {});

  const [switchState, setSwitchState] = React.useState(switchBtnsState);

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
    toast.success(`Project ${project.title} deleted succ`);
  };

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
  }));
  const classes = useStyles();
  return (
    <Container>
      <Typography variant="h2" gutterBottom align="center">
        Project Overview
      </Typography>
      <Grid container justify="space-evenly" spacing={6}>
        <Grid item xs={12} md={6}>
          <ProjectDetailsCard title="Project Name" description={project.title}>
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
                date={moment(new Date(project.deadline)).format('YYYY-MM-DD')}
              >
                {moment(new Date(project.deadline)).format('D MMMM YYYY')}
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
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => {
  const index = state.projects.findIndex(
    (proj) => proj.id === +ownProps.match.params.id
  );
  return {
    project: state.projects[index],
    teams: state.teams,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleTeam: (teamId, projectId) => dispatch(toggleTeam(teamId, projectId)),
  deleteProject: () => dispatch(deleteProject(+ownProps.match.params.id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
