import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import GroupIcon from '@material-ui/icons/Group';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Box from '@material-ui/core/Box';
import cx from 'clsx';

import useStyles from './TeamInfoStyle';

const TeamInfo = ({ deleteTeam, team, role }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={2}>
      <Grid container className={classes.flexCol} spacing={2}>
        <Grid item>
          <Avatar
            title="Team Name"
            variant="rounded"
            className={classes.avatar}
          >
            {team.name.charAt(0)}
          </Avatar>
        </Grid>
        <Grid item>
          <Typography variant="h4"> {team.name}</Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.m}>
        <Box
          className={cx(classes.flexCol, classes.mr, classes.box)}
          borderRadius={8}
        >
          <AssignmentIcon fontSize="large" color="secondary" />
          <Typography variant="caption">
            {team.projects?.length
              ? `${team.projects?.length} projects`
              : `0 projects`}
          </Typography>
        </Box>
        <Box
          className={cx(classes.flexCol, classes.mr, classes.box)}
          borderRadius={8}
        >
          <GroupIcon fontSize="large" color="secondary" />
          <Typography variant="caption">
            {team.employees?.length
              ? `${team.employees?.length} members`
              : `0 members`}
          </Typography>
        </Box>
      </Grid>
      <Paper className={classes.paper} elevation={1}>
        <Typography variant="body1">{team.description}</Typography>
        <Grid container alignItems="center" spacing={2} className={classes.mt}>
          <Grid item>
            <Avatar alt="leader" className={classes.avatar}>
              {team.leaderId?.firstName.charAt(0).toUpperCase()}
            </Avatar>
          </Grid>
          <Typography variant="body1" color="textSecondary">
            {team.leaderId
              ? team.leaderId?.firstName + ' ' + team.leaderId?.lastName
              : 'No team leader yet!'}
          </Typography>
        </Grid>
      </Paper>
    </Paper>
  );
};

export default TeamInfo;
