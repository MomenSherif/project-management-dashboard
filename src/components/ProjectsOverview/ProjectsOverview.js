import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  subtitle2: {
    color: theme.palette.text.secondary,
  },
  status: {
    borderRadius: theme.spacing(1),
    maxWidth: 'max-content',
  },
  success: {},
}));

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
                <Box
                  bgcolor="success.main"
                  color="info.contrastText"
                  p={1}
                  className={classes.status}
                >
                  Done
                </Box>
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
                <Box
                  bgcolor="success.main"
                  size="small"
                  color="info.contrastText"
                  p={1}
                  className={classes.status}
                >
                  Done
                </Box>
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
                <Box
                  bgcolor="warning.main"
                  size="small"
                  color="info.contrastText"
                  p={1}
                  className={classes.status}
                >
                  In review
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </Fragment>
  );
};

export default ProjectsOverview;
