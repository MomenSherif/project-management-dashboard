import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';

import GroupIcon from '@material-ui/icons/Group';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ScheduleIcon from '@material-ui/icons/Schedule';
import TimelineIcon from '@material-ui/icons/Timeline';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import BusinessIcon from '@material-ui/icons/Business';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AssignmentIcon from '@material-ui/icons/Assignment';

import moment from 'moment';
import { toast } from 'react-toastify';

import ProjectDetailsCard from '../components/ProjectDetailsCard/ProjectDetailsCard';
import { fetchUserInfo } from '../actions/user';

const UserDetails = ({ match }) => {
  const [userData, setUserData] = useState({});

  const tasks = [
    { id: 1, title: 'Task 1', state: 'done' },
    { id: 2, title: 'Task 2', state: 'in-progress' },
    { id: 3, title: 'Task 3', state: 'done' },
    { id: 4, title: 'Task 4', state: 'done' },
  ];

  const switchBtnsState = tasks.reduce((acc, task) => {
    acc[`taskCheck-${task.id}`] = task.state === 'done' ? true : false;
    return acc;
  }, {});

  const [switchState, setSwitchState] = useState(switchBtnsState);

  useEffect(() => {
    // (async () => {
    //   const user = await fetchUserInfo(match.params.id);
    //   setUserData(user);
    // })();
  }, []);

  const handleChange = (event) => {
    setSwitchState({
      ...switchState,
      [event.target.name]: event.target.checked,
    });
    //toggleTeam(+event.target.value, +match.params.id);
    if (event.target.checked) {
      toast.success('Task marked as completed successfuly');
    } else {
      toast.warn('Task marked as in progress !');
    }
  };

  return (
    <Container>
      <Typography variant='h2' gutterBottom>
        User Info
      </Typography>
      <Grid container justify='space-evenly' spacing={6}>
        <Grid item xs={4}>
          <ProjectDetailsCard title='First Name' description={'Menna'}>
            <GroupIcon color='secondary' fontSize='large' />
          </ProjectDetailsCard>
        </Grid>
        <Grid item xs={4}>
          <ProjectDetailsCard title='Last Name' description={'Elnoqally'}>
            <GroupIcon color='secondary' fontSize='large' />
          </ProjectDetailsCard>
        </Grid>
        <Grid item xs={4}>
          <ProjectDetailsCard
            title='Date of birth'
            description={
              <time date={moment(new Date()).format('YYYY-MM-DD')}>
                {moment(new Date()).format('D MMMM YYYY')}
              </time>
            }
          >
            <ScheduleIcon color='secondary' fontSize='large' />
          </ProjectDetailsCard>
        </Grid>
        <Grid item xs={4}>
          <ProjectDetailsCard title='Salary' description={'15000'}>
            <MonetizationOnIcon color='secondary' fontSize='large' />
          </ProjectDetailsCard>
        </Grid>
        <Grid item xs={4}>
          <ProjectDetailsCard title='Email' description={'menna@gmail.com'}>
            <EmailIcon color='secondary' fontSize='large' />
          </ProjectDetailsCard>
        </Grid>
        <Grid item xs={4}>
          <ProjectDetailsCard title='Phone' description={'01120187236'}>
            <PhoneIcon color='secondary' fontSize='large' />
          </ProjectDetailsCard>
        </Grid>
        <Grid item xs={4}>
          <ProjectDetailsCard
            title='Organization'
            description={'Vodafone International Services'}
          >
            <BusinessIcon color='secondary' fontSize='large' />
          </ProjectDetailsCard>
        </Grid>
        <Grid item xs={4}>
          <ProjectDetailsCard title='Team' description={'Frontend Angular'}>
            <GroupIcon color='secondary' fontSize='large' />
          </ProjectDetailsCard>
        </Grid>
        <Grid item xs={4}>
          <ProjectDetailsCard title='Role' description={'Employee'}>
            <AssignmentIndIcon color='secondary' fontSize='large' />
          </ProjectDetailsCard>
        </Grid>
        <Grid item xs={12}>
          <ProjectDetailsCard
            title='Assigned Tasks'
            description={tasks.map((task) => (
              <Grid container alignItems='center' key={task.id} spacing={3}>
                <Grid item>
                  <Typography variant='h4'>{task.title}</Typography>
                </Grid>
                <Grid item>
                  <Switch
                    checked={switchState[`taskCheck-${task.id}`]}
                    onChange={handleChange}
                    name={`taskCheck-${task.id}`}
                    value={task.id}
                    inputProps={{ 'task-id': task.id }}
                  />
                </Grid>
              </Grid>
            ))}
          >
            <AssignmentIcon color='secondary' fontSize='large' />
          </ProjectDetailsCard>
        </Grid>
      </Grid>
    </Container>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(null, mapDispatchToProps)(UserDetails);
