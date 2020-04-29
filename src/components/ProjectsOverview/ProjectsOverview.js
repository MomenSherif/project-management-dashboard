import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Box from '@material-ui/core/Box';

import useStyles from './ProjectsOverviewStyle';
import ChipProjectStatus from '../ChipProjectStatus/ChipProjectStatus';

const ProjectsOverview = (props) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Paper className={classes.paper}>
        <Typography variant="subtitle2" color="textSecondary">
          My Projects
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Project Name | Client</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </Fragment>
  );
};

export default ProjectsOverview;
