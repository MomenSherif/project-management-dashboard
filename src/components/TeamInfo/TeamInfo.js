import React from 'react';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import GroupIcon from '@material-ui/icons/Group';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Box from '@material-ui/core/Box';
import DeleteIcon from '@material-ui/icons/Delete';
import cx from 'clsx';

import TeamFormDialog from '../TeamFormDialog/TeamFormDialog';
import ConfirmDialog from '../Dialogs/ConfirmDialog/ConfirmDialog';
import { deleteTeam } from '../../actions/teams';

import useStyles from './TeamInfoStyle';

const TeamInfo = ({ deleteTeam, team }) => {
  const classes = useStyles();

  const onDeleteTeam = () => {
    deleteTeam(team.id);
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
            {team.name.charAt(0)}
          </Avatar>
        </Grid>
        <Grid item>
          <Typography variant='h4'> {team.name}</Typography>
          {/* <Typography variant='body2' color='textSecondary' align='center'>
            org Name
          </Typography> */}
        </Grid>
      </Grid>

      <Grid container className={classes.m}>
        <Box
          className={cx(classes.flexCol, classes.mr, classes.box)}
          borderRadius={8}
        >
          <AssignmentIcon fontSize='medium' />
          <Typography variant='caption'>
            {team.projects?.length
              ? `${team.projects?.length} projects`
              : `0 projects`}
          </Typography>
        </Box>
        <Box
          className={cx(classes.flexCol, classes.mr, classes.box)}
          borderRadius={8}
        >
          <GroupIcon fontSize='medium' />
          <Typography variant='caption'>
            {team.employees?.length
              ? `${team.employees?.length} members`
              : `0 members`}
          </Typography>
        </Box>
      </Grid>

      <Paper className={classes.paper} elevation={0}>
        <Typography variant='body1'>{team.description}</Typography>
        <Grid container alignItems='center' spacing={2} className={classes.mt}>
          <Grid item>
            <Avatar alt='leader' src='/avatar.png' />
          </Grid>
          <Typography variant='body1' color='textSecondary'>
            {team.leader?.firstName + ' ' + team.leader?.lastName}
          </Typography>
        </Grid>
      </Paper>

      <div className={classes.mt}>
        <TeamFormDialog editMode={true} editedTeam={team} />

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
const mapDispatchToProps = dispatch => ({
  deleteTeam: teamId => dispatch(deleteTeam(teamId))
});
export default connect(null, mapDispatchToProps)(TeamInfo);
