import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CreateIcon from '@material-ui/icons/Create';
import AssignmentIcon from '@material-ui/icons/Assignment';
import BusinessIcon from '@material-ui/icons/Business';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ScheduleIcon from '@material-ui/icons/Schedule';
import TimelineIcon from '@material-ui/icons/Timeline';
import ProjectDetailsCard from '../components/ProjectDetailsCard/ProjectDetailsCard';
import moment from 'moment';

const ProjectDetails = () => {
  return (
    <Container>
      <Typography variant='h2' gutterBottom>
        Project Overview
      </Typography>
      <Grid container justify='space-evenly' spacing={6}>
        <Grid item xs={12} md={6}>
          <ProjectDetailsCard
            title='Project Name'
            description='Project Management Dashboard'
          >
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
            description='balalhsdhjsdsdshfsfjhffhffhffgjhfvf'
          >
            <AssignmentIcon color='secondary' fontSize='large' />
          </ProjectDetailsCard>
        </Grid>
        <Grid item xs={3}>
          <ProjectDetailsCard title='Budget' description='200000$'>
            <MonetizationOnIcon color='secondary' fontSize='large' />
          </ProjectDetailsCard>
        </Grid>
        <Grid item xs={3}>
          <ProjectDetailsCard title='State' description='In Progress'>
            <TimelineIcon color='secondary' fontSize='large' />
          </ProjectDetailsCard>
        </Grid>
        <Grid item xs={3}>
          <ProjectDetailsCard
            title='Deadline'
            description={
              <time dateTime={moment(new Date()).format()}>
                {moment(new Date()).format('D MMMM YYYY')}
              </time>
            }
          >
            <ScheduleIcon color='secondary' fontSize='large' />
          </ProjectDetailsCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProjectDetails;
