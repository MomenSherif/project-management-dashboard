import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import ProjectFormDialog from '../components/ProjectFormDialog/ProjectFormDialog';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
const Project = (props) => {
  return (
    <Fragment>
      <Typography variant='h3' gutterBottom align='center'>
        Projects
      </Typography>
      <Grid container justify='center'>
        <Grid item component={ProjectCard}></Grid>
        <Grid item component={ProjectCard}></Grid>
        <Grid item component={ProjectCard}></Grid>
        <Grid item>
          <Pagination count={10} color='primary' />
        </Grid>
      </Grid>
      <ProjectFormDialog />
    </Fragment>
  );
};

export default Project;
