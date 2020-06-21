import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import ProjectItem from './ProjectItem';
import Pagination from '@material-ui/lab/Pagination';
import useStyles from './ProjectPanelStyle';
import cx from 'clsx';

const ProjectPanel = ({ Projects, pageSize }) => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [projects, setProjects] = useState();

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    setPage(1);
  }, []);

  useEffect(() => {
    setProjects(
      Projects.slice(pageSize * (page - 1), pageSize * (page - 1) + pageSize)
    );
  }, [page]);
  return (
    <Paper elevation={2} className={classes.root}>
      <Typography variant="h4" className={classes.titleMargin} align="center">
        Team's Project
      </Typography>
      <div className={cx(classes.mb, classes.projects)}>
        {projects?.length ? (
          projects.map((p) => (
            <ProjectItem key={p._id} project={p}></ProjectItem>
          ))
        ) : (
          <Typography align="center">No projects yet!</Typography>
        )}
      </div>

      {Projects.length > pageSize ? (
        <Pagination
          count={Math.ceil(Projects.length / pageSize)}
          page={page}
          onChange={handlePageChange}
          color="primary"
          className={classes.paging}
        />
      ) : (
        ''
      )}
    </Paper>
  );
};

ProjectPanel.defaultProps = {
  pageSize: 4,
};

export default ProjectPanel;
