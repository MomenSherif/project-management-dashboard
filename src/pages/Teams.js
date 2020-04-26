import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import TeamCard from '../components/TeamCard/TeamCard';
import TeamFormDialog from '../components/TeamFormDialog/TeamFormDialog';

const Teams = () => {
  return (
    <Container>
      <Typography variant='h2' gutterBottom>
        Teams
      </Typography>
      <Grid container justify='space-between'>
        <Grid
          item
          xs={11}
          md={5}
          className='pattern-dots-sm slategray h-5'
          style={{ marginBottom: '16px' }}
        >
          <div style={{ transform: 'translate(10px, -15px)' }}>
            <TeamCard />
          </div>
        </Grid>
      </Grid>
      <TeamFormDialog />
    </Container>
  );
};

export default Teams;
