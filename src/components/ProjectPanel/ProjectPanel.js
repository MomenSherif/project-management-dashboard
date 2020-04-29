import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import ProjectItem from './ProjectItem';
import Pagination from '@material-ui/lab/Pagination';
import useStyles from './ProjectPanelStyle';

const ProjectPanel = () => {
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
        <ProjectItem></ProjectItem>
        <ProjectItem></ProjectItem>
        <ProjectItem></ProjectItem>
        <ProjectItem></ProjectItem>
      </div>

      <Pagination count={3} color='primary' className={classes.paging} />
    </Paper>
  );
};

export default ProjectPanel;
