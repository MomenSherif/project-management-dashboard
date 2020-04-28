import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MemberCard from '../components/MemberCard/MemberCard';

const TeamDetails = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography>Team Details</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Team projects</Typography>
        </Grid>
        <Grid item>
          <Typography>Team members</Typography>
          <Grid container spacing={4}>
            <MemberCard></MemberCard>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TeamDetails;
