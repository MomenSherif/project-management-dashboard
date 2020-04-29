import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import useStyles from './MemberPanelStyle';
import MemberCard from './MemberCard';
import EmailDialog from '../Dialogs/EmailDialog/EmailDialog';

const MembersPanel = () => {
  const classes = useStyles();

  const onAddMember = () => {
    console.log('member added');
  };
  return (
    <Paper elevation={2} className={classes.root}>
      <Typography variant='h4' className={classes.mb} align='center'>
        Team's Members
      </Typography>
      <Grid container className={classes.flex}>
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
      </Grid>
      <Pagination count={3} color='secondary' className={classes.paging} />

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

export default MembersPanel;
