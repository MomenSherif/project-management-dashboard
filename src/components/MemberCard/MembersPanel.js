import React, { useState, useEffect } from 'react';
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

const MembersPanel = ({ team, addTeamMember, teamId, Members, pageSize }) => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [members, setMembers] = useState();

  const onAddMember = email => {
    //get user by email
    const member = {
      id: 5,
      firstName: `cady`,
      lastName: 'emad',
      phoneNumber: ' 01222',
      email: `cady@gmail.com`,
      jobTitle: 'frontend developer'
    };

    addTeamMember(teamId, member);
    setPage(1);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    setPage(1);
  }, []);

  useEffect(() => {
    setMembers(
      Members.slice(pageSize * (page - 1), pageSize * (page - 1) + pageSize)
    );
  }, [page]);

  return (
    <Paper elevation={2} className={classes.root}>
      <Typography variant='h4' className={classes.mb} align='center'>
        Team's Members
      </Typography>
      <Grid container className={classes.flex}>
        {members?.length ? (
          members.map(member => <MemberCard key={member.id} member={member} />)
        ) : (
          <Typography>No members yet!</Typography>
        )}
      </Grid>
      {Members.length > pageSize ? (
        <Pagination
          count={Math.ceil(Members.length / pageSize)}
          page={page}
          onChange={handlePageChange}
          color='secondary'
          className={classes.paging}
        />
      ) : (
        ''
      )}
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

MembersPanel.defaultProps = {
  pageSize: 2
};
export default connect(MapStateToProps, MapDispatchToProps)(MembersPanel);
