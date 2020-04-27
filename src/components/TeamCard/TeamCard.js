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

const TeamCard = () => {
  const classes = useStyles();

  return (
    <ButtonBase component='a' className={classes.cardContainer}>
      <Paper className={classes.card} elevation={2}>
        <Grid container alignItems='center' spacing={2}>
          <Grid item>
            <Avatar
              title='Front end'
              variant='rounded'
              className={classes.avatar}
            >
              F
            </Avatar>
          </Grid>
          <Grid item>
            <Typography variant='h4'>Front End</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems='center'
          justify='flex-start'
          spacing={3}
          className={classes.mt}
        >
          <Grid item className={classes.flex}>
            <AssignmentIcon color='secondary' fontSize='large' />
            <Typography variant='subtitle1'> 6 Projects</Typography>
          </Grid>
          <Grid item className={classes.flex}>
            <GroupIcon color='secondary' />
            <Typography variant='subtitle1'> 6 Members</Typography>
          </Grid>
        </Grid>
        <Grid container alignItems='center' spacing={2} className={classes.mt}>
          <Grid item>
            <Avatar
              alt='Wes Bos'
              src='https://storage.googleapis.com/indie-hackers.appspot.com/podcast-thumbnails/028-wes-bos.jpg'
            />
          </Grid>
          <Typography variant='body1' color='textSecondary'>
            Wes Bos
          </Typography>
        </Grid>
        <Grid
          container
          justify='center'
          alignItems='center'
          className={classes.createdAt}
        >
          <EventAvailableIcon style={{ marginRight: '3px' }} />
          <time dateTime={moment(new Date()).format()}>
            {moment(new Date()).format('D MMMM YYYY')}
          </time>
        </Grid>
      </Paper>
    </ButtonBase>
  );
};

export default TeamCard;
