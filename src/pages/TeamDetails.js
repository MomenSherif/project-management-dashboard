import React from 'react';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import MembersPanel from '../components/MemberCard/MembersPanel';
import TeamInfo from '../components/TeamInfo/TeamInfo';
import ProjectPanel from '../components/ProjectPanel/ProjectPanel';

const TeamDetails = props => {
  return (
    <Container style={{ display: 'flex' }}>
      <Grid container>
        <Grid item xs={4}>
          <TeamInfo team={props.team}></TeamInfo>
        </Grid>
      </Grid>

      <Grid container style={{ display: 'flex', flexDirection: 'column' }}>
        <Grid item xs={4}>
          <ProjectPanel projects={props.team.projects}></ProjectPanel>
        </Grid>

        <Grid item style={{ marginTop: '25px' }} xs={4}>
          <MembersPanel
            teamId={props.team.id}
            members={props.team.employees}
          ></MembersPanel>
        </Grid>
      </Grid>
    </Container>
  );
};
const mapStateToProps = (state, ownProps) => ({
  team: state.teams.filter(team => team.id === +ownProps.match.params.id)[0]
});
export default connect(mapStateToProps)(TeamDetails);
