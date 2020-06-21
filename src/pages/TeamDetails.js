import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from '../api/axios';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import TeamFormDialog from '../components/TeamFormDialog/TeamFormDialog';
import ConfirmDialog from '../components/Dialogs/ConfirmDialog/ConfirmDialog';
import { deleteTeam } from '../actions/teams';
import MembersPanel from '../components/MemberCard/MembersPanel';
import TeamInfo from '../components/TeamInfo/TeamInfo';
import ProjectPanel from '../components/ProjectPanel/ProjectPanel';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  mt: {
    marginTop: '25px',
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
  },
  edtBtn: {
    position: 'fixed',
    bottom: '120px',
    right: '40px',
  },
  progress: {
    left: '50%',
    top: '300px',
    marginLeft: '-4em',
    position: 'absolute',
  },
}));

const TeamDetails = ({ match, role, history }) => {
  const classes = useStyles();
  const [team, setTeam] = useState();
  const [loading, setLoading] = useState(true);

  const { id } = match.params;

  const getTeam = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/teams/${id}`
    );
    if (data) {
      setTeam(data);
      setLoading(false);
    }
  };

  const onUpdateTeam = () => {
    getTeam();
  };

  const onDeleteTeam = () => {
    axios.delete(`${process.env.REACT_APP_BACKEND_BASE_URL}/teams/${team.id}`);
    deleteTeam(team.id);
    history.replace('/teams');
  };

  useEffect(() => {
    getTeam();
  }, []);

  return (
    <>
      {loading ? (
        <div className={classes.progress}>
          <CircularProgress color="primary" thickness={4} size={100} />
        </div>
      ) : (
        <Container>
          <Typography variant="h2" gutterBottom align="center">
            Team Overview
          </Typography>
          <div className={classes.container}>
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

            {role === 'business-owner' && (
              <div className={classes.mt}>
                <TeamFormDialog
                  editMode={true}
                  editedTeam={team}
                  onEdit={onUpdateTeam}
                />
                <ConfirmDialog
                  title="Delete Team"
                  content="Are you sure you want to delete this team?"
                  onConfirm={onDeleteTeam}
                  btnStyle={classes.edtBtn}
                >
                  <DeleteIcon />
                </ConfirmDialog>
              </div>
            )}
          </div>
        </Container>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  role: state.auth.role,
});
const mapDispatchToProps = (dispatch) => ({
  deleteTeam: (teamId) => dispatch(deleteTeam(teamId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamDetails);
