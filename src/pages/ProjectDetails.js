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
import ProjectCard from '../components/ProjectCard/ProjectCard';
import moment from 'moment';

const ProjectDetails = () => {
  return (
    <Container>
      <Typography variant='h2' gutterBottom>
        Project Overview
      </Typography>
      <Grid container justify='space-evenly' spacing={6}>
        <Grid item xs={12} md={6}>
          <ProjectCard
            title='Project Name'
            description='Project Management Dashboard'
          >
            <CreateIcon color='secondary' fontSize='large'></CreateIcon>
          </ProjectCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <ProjectCard title='Organization/Company' description='ITI'>
            <BusinessIcon color='secondary' fontSize='large' />
          </ProjectCard>
        </Grid>
        <Grid item xs={12}>
          <ProjectCard
            title='Description'
            description='balalhsdhjsdsdshfsfjhffhffhffgjhfvf'
          >
            <AssignmentIcon color='secondary' fontSize='large' />
          </ProjectCard>
        </Grid>
        <Grid item xs={3}>
          <ProjectCard title='Budget' description='200000$'>
            <MonetizationOnIcon color='secondary' fontSize='large' />
          </ProjectCard>
        </Grid>
        <Grid item xs={3}>
          <ProjectCard title='State' description='In Progress'>
            <TimelineIcon color='secondary' fontSize='large' />
          </ProjectCard>
        </Grid>
        <Grid item xs={3}>
          <ProjectCard
            title='Deadline'
            description={
              <time dateTime={moment(new Date()).format()}>
                {moment(new Date()).format('D MMMM YYYY')}
              </time>
            }
          >
            <ScheduleIcon color='secondary' fontSize='large' />
          </ProjectCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProjectDetails;
