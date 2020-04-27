import React, { Fragment } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import GroupIcon from '@material-ui/icons/Group';
import AssignmentIcon from '@material-ui/icons/Assignment';

import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
// import useStyles from './ProjectCountStyle';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    minHeight: '130px',
  },
  center: {
    textAlign: 'center',
  },
  projectCount: {
    display: 'inline-block',
    borderRadius: '50%',
    border: `5px solid`,
    borderColor: theme.palette.primary.light,
    width: theme.spacing(7),
    height: theme.spacing(7),
    lineHeight: `45px`,
  },
}));

const TeamCount = (props) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Paper className={classes.paper}>
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          Number of teams
        </Typography>
        <Grid
          container
          className={classes.center}
          alignItems="center"
          spacing={1}
        >
          <Grid item xs={6}>
            <Typography variant="h6">Total</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" className={classes.projectCount}>
              10
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
};

export default TeamCount;
