import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import GroupIcon from '@material-ui/icons/Group';
import AssignmentIcon from '@material-ui/icons/Assignment';

import moment from 'moment';
import useStyles from './TeamCardStyle';
import { Link } from 'react-router-dom';

const TeamCard = ({
  id,
  name,
  description,
  leaderId,
  projects,
  employees,
  createdAt,
}) => {
  const classes = useStyles();

  return (
    <ButtonBase
      component={Link}
      className={classes.cardContainer}
      to={`/team-details/${id}`}
    >
      <Paper className={classes.card} elevation={2}>
        <Grid container alignItems='center' spacing={2}>
          <Grid item>
            <Avatar title={name} variant='rounded' className={classes.avatar}>
              {name.charAt(0)}
            </Avatar>
          </Grid>
          <Grid item>
            <Typography variant='h4'>{name}</Typography>
          </Grid>
        </Grid>
        <Typography variant='subtitle1' className={classes.mt}>
          {description}
        </Typography>
        <Grid
          container
          alignItems='center'
          justify='flex-start'
          spacing={3}
          className={classes.mt}
        >
          <Grid item className={classes.flex}>
            <AssignmentIcon color='secondary' fontSize='large' />
            <Typography variant='overline'>
              {projects?.length
                ? `${projects?.length} Projects`
                : 'No Projects Assigned!'}
            </Typography>
          </Grid>
          <Grid item className={classes.flex}>
            <GroupIcon color='secondary' />
            <Typography variant='overline'>
              {employees?.length
                ? `${employees?.length} Members`
                : 'No Members Assigned!'}
            </Typography>
          </Grid>
        </Grid>
        <Grid container alignItems='center' spacing={2} className={classes.mt}>
          <Grid item>
            <Avatar alt={leaderId?.firstName} className={classes.avatar}>
              {leaderId?.firstName?.charAt(0).toUpperCase()}
            </Avatar>
          </Grid>
          {leaderId ? (
            <Typography variant='body1' color='textSecondary'>
              {leaderId.firstName + ' ' + leaderId.lastName}
            </Typography>
          ) : (
            'No team leader yet'
          )}
        </Grid>
        <Grid
          container
          justify='center'
          alignItems='center'
          className={classes.createdAt}
        >
          <EventAvailableIcon style={{ marginRight: '3px' }} />
          <time dateTime={moment(createdAt).format()}>
            {moment(createdAt).format('D MMMM YYYY')}
          </time>
        </Grid>
      </Paper>
    </ButtonBase>
  );
};

export default TeamCard;
