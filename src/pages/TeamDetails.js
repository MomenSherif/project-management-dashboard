import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MembersPanel from '../components/MemberCard/MembersPanel';
import TeamInfo from '../components/TeamInfo/TeamInfo';
import ProjectPanel from '../components/ProjectPanel/ProjectPanel';
const TeamDetails = () => {
  return (
    <Container style={{ display: 'flex' }}>
      <Grid container xs={4}>
        <Grid item xs={4}>
          <TeamInfo></TeamInfo>
        </Grid>
      </Grid>

      <Grid
        container
        style={{ display: 'flex', flexDirection: 'column' }}
        xs={6}
      >
        <Grid item>
          <ProjectPanel></ProjectPanel>
        </Grid>

        <Grid item style={{ marginTop: '25px' }}>
          <MembersPanel></MembersPanel>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TeamDetails;
