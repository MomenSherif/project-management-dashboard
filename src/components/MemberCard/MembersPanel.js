import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from '../../api/axios';
import { toast } from 'react-toastify';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import useStyles from './MemberPanelStyle';
import MemberCard from './MemberCard';
import EmailDialog from '../Dialogs/EmailDialog/EmailDialog';
import { addTeamMember } from '../../actions/teams';
import TaskForm from '../TaskFormDialog/Taskform';

const MembersPanel = ({
  team,
  addTeamMember,
  teamId,
  Members,
  pageSize,
  auth,
}) => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [members, setMembers] = useState();

  const onAddMember = async (email) => {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/employees/assign-to-team`,
        {
          email,
          teamId,
        }
      )
      .then(({ data }) => {
        addTeamMember(teamId, data);
        setPage(1);
        toast.success(`Member is added successfully!`);
      })
      .catch((err) => toast.error(`Failed to add member to team!`));
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
          members.map((member) => (
            <MemberCard key={member._id} member={member} />
          ))
        ) : (
          <Typography>No members yet!</Typography>
        )}
      </Grid>
      {Members?.length > pageSize ? (
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

      {auth.role === 'business-owner' && (
        <EmailDialog
          title='Add Member To Team'
          content='Enter Member Email'
          onConfirm={onAddMember}
          btnStyle={classes.addBtn}
        >
          <AccountCircleIcon />
        </EmailDialog>
      )}

      {auth.role === 'team-leader' && team.leaderId?.id === auth._id && (
        <Fragment>
          <TaskForm teamId={teamId} team={team} />
        </Fragment>
      )}
    </Paper>
  );
};

const MapStateToProps = (state) => ({
  // team: state.teams
  auth: state.auth,
});
const MapDispatchToProps = (dispatch) => ({
  addTeamMember: (teamName, member) =>
    dispatch(addTeamMember(teamName, member)),
});

MembersPanel.defaultProps = {
  pageSize: 2,
};
export default connect(MapStateToProps, MapDispatchToProps)(MembersPanel);
