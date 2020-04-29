import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import GroupIcon from '@material-ui/icons/Group';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Box from '@material-ui/core/Box';
import cx from 'clsx';

import TeamFormDialog from '../TeamFormDialog/TeamFormDialog';
import ConfirmDialog from '../Dialogs/ConfirmDialog/ConfirmDialog';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from './TeamInfoStyle';

const TeamInfo = () => {
  const classes = useStyles();

  const onDeleteTeam = () => {
    console.log('team deleted');
  };
  return (
    <Paper className={classes.root} elevation={2}>
      <Grid container className={classes.flexCol} spacing={2}>
        <Grid item>
          <Avatar
            title='Team Name'
            variant='rounded'
            className={classes.avatar}
          >
            T
          </Avatar>
        </Grid>
        <Grid item>
          <Typography variant='h4'>Team Name</Typography>
          <Typography variant='body2' color='textSecondary' align='center'>
            org Name
          </Typography>
        </Grid>
      </Grid>

      <Grid container className={classes.m}>
        <Box
          className={cx(classes.flexCol, classes.mr, classes.box)}
          borderRadius={8}
        >
          <AssignmentIcon fontSize='medium' />
          <Typography variant='caption'>3 projects</Typography>
        </Box>
        <Box
          className={cx(classes.flexCol, classes.mr, classes.box)}
          borderRadius={8}
        >
          <GroupIcon fontSize='medium' />
          <Typography variant='caption'>4 members</Typography>
        </Box>
      </Grid>

      <Paper className={classes.paper} elevation={0}>
        <Typography variant='body1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae
          asperiores culpa quidem iste cum, labore sequi ex eaque obcaecati
        </Typography>
        <Grid container alignItems='center' spacing={2} className={classes.mt}>
          <Grid item>
            <Avatar alt='leader' src='/avatar.png' />
          </Grid>
          <Typography variant='body1' color='textSecondary'>
            cady emad
          </Typography>
        </Grid>
      </Paper>

      <div className={classes.mt}>
        <TeamFormDialog />

        <ConfirmDialog
          title='Delete Team'
          content='Are you sure you want to delete this team?'
          onConfirm={onDeleteTeam}
          btnStyle={classes.edtBtn}
        >
          <DeleteIcon />
        </ConfirmDialog>
      </div>
    </Paper>
  );
};

export default TeamInfo;
