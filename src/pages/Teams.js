import React from 'react';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import TeamCard from '../components/TeamCard/TeamCard';
import TeamFormDialog from '../components/TeamFormDialog/TeamFormDialog';

const Teams = ({ teams }) => {
  const teamList = teams.map((team) => (
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
      <Typography variant='h2' gutterBottom>
        Teams
      </Typography>
      <Grid container justify='space-between' alignItems='flex-start'>
        {teamList}
      </Grid>
      <TeamFormDialog />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  teams: state.teams,
});

export default connect(mapStateToProps)(Teams);
