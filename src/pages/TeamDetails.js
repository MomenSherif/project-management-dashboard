import React from 'react';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import MembersPanel from '../components/MemberCard/MembersPanel';
import TeamInfo from '../components/TeamInfo/TeamInfo';
import ProjectPanel from '../components/ProjectPanel/ProjectPanel';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  }
}));

const TeamDetails = props => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container>
        <Grid item xs={4}>
          <TeamInfo team={props.team}></TeamInfo>
        </Grid>
      </Grid>

      <Grid container style={{ display: 'flex', flexDirection: 'column' }}>
        <Grid item xs={4}>
          <ProjectPanel Projects={props.team.projects}></ProjectPanel>
        </Grid>

        <Grid item style={{ marginTop: '25px' }} xs={4}>
          <MembersPanel
            teamId={props.team.id}
            Members={props.team.employees}
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
