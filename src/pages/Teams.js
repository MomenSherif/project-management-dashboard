import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from '../api/axios';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import { makeStyles } from '@material-ui/core/styles';

import TeamCard from '../components/TeamCard/TeamCard';
import TeamFormDialog from '../components/TeamFormDialog/TeamFormDialog';
import { fetchTeams } from '../actions/teams';

const useStyles = makeStyles((theme) => ({
  progress: {
    left: '50%',
    top: '300px',
    marginLeft: '-4em',
    position: 'absolute',
  },
}));

const Teams = ({ teams, fetchTeams, role }) => {
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    (async function () {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/teams`
      );
      if (data) {
        fetchTeams();
        setLoading(false);
      }
    })();
  }, []);

  const teamList = teams.map((team) => (
    <Grid
      key={team.id}
      item
      xs={11}
      md={5}
      className="pattern-dots-md gray-light"
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
        <div className={classes.progress}>
          <CircularProgress color="primary" thickness={4} size={100} />
        </div>
      ) : (
        <Fragment>
          <Typography variant="h2" align="center" gutterBottom>
            Teams
          </Typography>
          <Grid container justify="space-between" alignItems="flex-start">
            {teamList}
          </Grid>
          {role === 'business-owner' && <TeamFormDialog />}
        </Fragment>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  teams: state.teams,
  role: state.auth.role,
});
const mapDispatchToProps = (dispatch) => ({
  fetchTeams: () => dispatch(fetchTeams()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Teams);
