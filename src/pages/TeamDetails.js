import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

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
  },
  mt: {
    marginTop: '25px'
  },
  grid: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const TeamDetails = ({ match }) => {
  const classes = useStyles();
  const [team, setTeam] = useState();
  const [loading, setLoading] = useState(true);

  const { id } = match.params;

  useEffect(() => {
    (async function() {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/teams/${id}`
      );
      if (data) {
        setTeam(data);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      {loading ? (
        <LinearProgress
          variant='query'
          color='primary'
          className={classes.loading}
        />
      ) : (
        <Container className={classes.container}>
          <Grid container>
            <Grid item xs={4}>
              <TeamInfo team={team}></TeamInfo>
            </Grid>
          </Grid>

          <Grid container className={classes.grid}>
            <Grid item xs={4}>
              <ProjectPanel Projects={team.projects}></ProjectPanel>
            </Grid>

            <Grid item className={classes.mt} xs={4}>
              <MembersPanel
                teamId={team.id}
                team={team}
                Members={team.employees}
              ></MembersPanel>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default TeamDetails;
