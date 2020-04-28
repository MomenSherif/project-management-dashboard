import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import ProjectFormDialog from '../components/ProjectFormDialog/ProjectFormDialog';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';

const Project = ({ projects }) => {
  const projectList = projects.map((project) => (
    <Grid item key={project.id} xs={12}>
      <ProjectCard project={project} />
    </Grid>
  ));
  return (
    <Container>
      <Typography variant="h3" gutterBottom align="center">
        Projects
      </Typography>
      <Grid container spacing={1} direction="row" justify="center">
        {projectList}
      </Grid>
      {/* <Pagination count={10} color="primary" /> */}
      <ProjectFormDialog />
    </Container>
  );
};
const mapStateToProps = (state) => ({
  projects: state.projects,
});

export default connect(mapStateToProps)(Project);
