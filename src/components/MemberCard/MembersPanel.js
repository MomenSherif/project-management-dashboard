import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import useStyles from './MemberPanelStyle';
import MemberCard from './MemberCard';
import EmailDialog from '../Dialogs/EmailDialog/EmailDialog';
import { addTeamMember } from '../../actions/teams';
import { connect } from 'react-redux';

const MembersPanel = ({ team, addTeamMember, teamId, members }) => {
  const classes = useStyles();

  const onAddMember = () => {
    const member = {
      id: 5,
      firstName: `cady`,
      lastName: 'emad',
      phoneNumber: ' 01222',
      email: `cady@gmail.com`,
      jobTitle: 'frontend developer'
    };

    addTeamMember(teamId, member);
  };
  return (
    <Paper elevation={2} className={classes.root}>
      <Typography variant='h4' className={classes.mb} align='center'>
        Team's Members
      </Typography>
      <Grid container className={classes.flex}>
        {members ? (
          members.map(member => <MemberCard key={member.id} member={member} />)
        ) : (
          <Typography>No members yet!</Typography>
        )}
      </Grid>
      <Pagination count={3} color='secondary' className={classes.paging} />
      {console.log('team in memeber panel -> ', team)}
      <EmailDialog
        title='Add Member To Team'
        content='Enter Member Email'
        onConfirm={onAddMember}
        btnStyle={classes.addBtn}
      >
        <AccountCircleIcon />
      </EmailDialog>
    </Paper>
  );
};

const MapStateToProps = state => ({
  team: state.teams
});
const MapDispatchToProps = dispatch => ({
  addTeamMember: (teamId, member) => dispatch(addTeamMember(teamId, member))
});
export default connect(MapStateToProps, MapDispatchToProps)(MembersPanel);
