import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import ProjectItem from './ProjectItem';
import Pagination from '@material-ui/lab/Pagination';
import useStyles from './ProjectPanelStyle';

const ProjectPanel = ({ projects }) => {
  const classes = useStyles();
  return (
    <Paper elevation={2} className={classes.root}>
      <TextField
        id='standard-search'
        label='Search field'
        type='search'
        className={classes.mb}
      />
      <Typography variant='h4' className={classes.mb}>
        Team's Project
      </Typography>
      <div className={classes.mb}>
        {projects ? (
          projects.map(p => <ProjectItem key={p.id} project={p}></ProjectItem>)
        ) : (
          <Typography>No projects yet!</Typography>
        )}
      </div>

      <Pagination count={3} color='primary' className={classes.paging} />
    </Paper>
  );
};

export default ProjectPanel;
