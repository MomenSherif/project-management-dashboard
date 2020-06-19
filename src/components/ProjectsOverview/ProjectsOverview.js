import React, { Fragment, useEffect } from 'react';
import moment from 'moment';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

import useStyles from './ProjectsOverviewStyle';
import ChipProjectStatus from '../ChipProjectStatus/ChipProjectStatus';

const ProjectsOverview = ({ projects }) => {
  const classes = useStyles();

  // is this the right place?
  const projectList = projects.map((project) => {
    return (
      <TableRow key={project._id}>
        <TableCell>
          <Typography variant="subtitle1">{project.title}</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {project.description.substring(0, 30) + '...'}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant="subtitle1">
            {moment(project.deadLine).format('MMM DD, YYYY')}
          </Typography>
        </TableCell>
        <TableCell>
          <ChipProjectStatus statusType={project.state} />
        </TableCell>
        <TableCell>
          <Typography variant="subtitle1">{project.budget}</Typography>
        </TableCell>
      </TableRow>
    );
  });

  return (
    <Fragment>
      <Paper className={classes.paper}>
        <Typography variant="subtitle2" color="textSecondary">
          My Projects
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Project</TableCell>
              <TableCell>Deadline | End date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Budget</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projectList}
            {/* <TableRow>
              <TableCell>
                <Typography variant="subtitle1">
                  Front-end project for one company
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  Client Name
                </Typography>
              </TableCell>
              <TableCell>
                <ChipProjectStatus statusType="done" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle1">
                  Back-end project for another company
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  Client Name
                </Typography>
              </TableCell>
              <TableCell>
                <ChipProjectStatus statusType="done" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle1">
                  Front-end project for one company
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  Client Name
                </Typography>
              </TableCell>
              <TableCell>
                <ChipProjectStatus statusType="in-review" />
              </TableCell>
            </TableRow> */}
          </TableBody>
        </Table>
      </Paper>
    </Fragment>
  );
};

export default ProjectsOverview;
