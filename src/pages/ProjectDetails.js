import React from 'react';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';

import CreateIcon from '@material-ui/icons/Create';
import AssignmentIcon from '@material-ui/icons/Assignment';
import BusinessIcon from '@material-ui/icons/Business';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ScheduleIcon from '@material-ui/icons/Schedule';
import TimelineIcon from '@material-ui/icons/Timeline';
import GroupIcon from '@material-ui/icons/Group';

import ProjectDetailsCard from '../components/ProjectDetailsCard/ProjectDetailsCard';
import TeamCard from '../components/TeamCard/TeamCard';
import { toggleTeam } from '../actions/projects';

import moment from 'moment';
import { toast } from 'react-toastify';

const ProjectDetails = ({ project, teams, toggleTeam, match }) => {
  const switchBtnsState = teams.reduce((acc, team) => {
    acc[`teamCheck-${team.id}`] = false;
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

  return (
    <Container>
      <Typography variant='h2' gutterBottom>
        Project Overview
      </Typography>
      <Grid container justify='space-evenly' spacing={6}>
        <Grid item xs={12} md={6}>
          <ProjectDetailsCard title='Project Name' description={project.title}>
            <CreateIcon color='secondary' fontSize='large'></CreateIcon>
          </ProjectDetailsCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <ProjectDetailsCard title='Organization/Company' description='ITI'>
            <BusinessIcon color='secondary' fontSize='large' />
          </ProjectDetailsCard>
        </Grid>
        <Grid item xs={12}>
          <ProjectDetailsCard
            title='Description'
            description={project.description}
          >
            <AssignmentIcon color='secondary' fontSize='large' />
          </ProjectDetailsCard>
        </Grid>
        <Grid item xs={3}>
          <ProjectDetailsCard title='Budget' description={project.budget}>
            <MonetizationOnIcon color='secondary' fontSize='large' />
          </ProjectDetailsCard>
        </Grid>
        <Grid item xs={3}>
          <ProjectDetailsCard title='State' description={project.state}>
            <TimelineIcon color='secondary' fontSize='large' />
          </ProjectDetailsCard>
        </Grid>
        <Grid item xs={3}>
          <ProjectDetailsCard
            title='Deadline'
            description={
              <time dateTime={project.deadline}>
                {moment(new Date()).format('D MMMM YYYY')}
              </time>
            }
          >
            <ScheduleIcon color='secondary' fontSize='large' />
          </ProjectDetailsCard>
        </Grid>
        <Grid item xs={8}>
          <ProjectDetailsCard
            title='Teams'
            description={teams.map((team) => (
              <Grid item xs={8} key={team.id}>
                <TeamCard name={team.name} leader={team.leader} />
                <Switch
                  //checked={switchState.teamCheck}
                  checked={switchState[`teamCheck-${team.id}`]}
                  onChange={handleChange}
                  name={`teamCheck-${team.id}`}
                  value={team.id}
                  inputProps={{ 'team-id': team.id }}
                />
              </Grid>
            ))}
          >
            <GroupIcon color='secondary' fontSize='large' />
          </ProjectDetailsCard>
        </Grid>
      </Grid>
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

const mapDispatchToProps = (dispatch) => ({
  toggleTeam: (teamId, projectId) => dispatch(toggleTeam(teamId, projectId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
