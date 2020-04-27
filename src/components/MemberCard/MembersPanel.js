import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import useStyles from './MemberPanelStyle';
import MemberCard from './MemberCard';

const MembersPanel = () => {
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.root}>
      <Typography variant='h4' className={classes.mb}>
        Team's Members
      </Typography>
      <MemberCard />
      <MemberCard />
    </Paper>
  );
};

export default MembersPanel;
