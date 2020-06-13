import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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

import ProjectDetailsCard from '../components/ProjectDetailsCard/ProjectDetailsCard';
import { fetchUserInfo } from '../actions/user';

const UserDetails = ({ match }) => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    // (async () => {
    //   const user = await fetchUserInfo(match.params.id);
    //   setUserData(user);
    // })();
  }, []);
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
          <ProjectDetailsCard title='Assigned Tasks' description={'Task1'}>
            <AssignmentIcon color='secondary' fontSize='large' />
          </ProjectDetailsCard>
        </Grid>
      </Grid>
    </Container>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(null, mapDispatchToProps)(UserDetails);
