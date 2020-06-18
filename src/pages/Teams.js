import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from '../api/axios';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

import TeamCard from '../components/TeamCard/TeamCard';
import TeamFormDialog from '../components/TeamFormDialog/TeamFormDialog';
import { fetchTeams } from '../actions/teams';

const Teams = ({ teams, fetchTeams }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function() {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/teams`
      );
      if (data) {
        fetchTeams();
        setLoading(false);
      }
    })();
  }, []);

  const teamList = teams.map(team => (
    <Grid
      key={team.id}
      item
      xs={11}
      md={5}
      className='pattern-dots-md gray-light'
      style={{ marginBottom: '32px' }}
    >
      <div style={{ transform: 'translate(15px, -15px)' }}>
        <TeamCard {...team} />
      </div>
    </Grid>
  ));

  return (
    <Container>
      {loading ? (
        <LinearProgress variant='query' color='primary' />
      ) : (
        <Fragment>
          <Typography variant='h2' gutterBottom>
            Teams
          </Typography>
          <Grid container justify='space-between' alignItems='flex-start'>
            {teamList}
          </Grid>
          <TeamFormDialog />
        </Fragment>
      )}
    </Container>
  );
};

const mapStateToProps = state => ({
  teams: state.teams
});
const mapDispatchToProps = dispatch => ({
  fetchTeams: () => dispatch(fetchTeams())
});
export default connect(mapStateToProps, mapDispatchToProps)(Teams);
