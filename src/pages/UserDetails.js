import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GroupIcon from '@material-ui/icons/Group';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ScheduleIcon from '@material-ui/icons/Schedule';
import TimelineIcon from '@material-ui/icons/Timeline';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import BusinessIcon from '@material-ui/icons/Business';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AssignmentIcon from '@material-ui/icons/Assignment';

import moment from 'moment';
import { toast } from 'react-toastify';
import formatter from '../helper/currencyFormater';
import ProjectDetailsCard from '../components/ProjectDetailsCard/ProjectDetailsCard';
import { fetchUserInfo, toggleTaskState } from '../api/userHelpers';

const UserDetails = ({ match, userId }) => {
  const [userData, setUserData] = useState({});

  const [isLoading, setLoading] = useState(true);

  const [switchState, setSwitchState] = useState(false);

  useEffect(() => {
    (async () => {
      const user = await fetchUserInfo(match.params.id);

      setUserData(user);

      const switchBtnsState = user?.tasks?.reduce((acc, task) => {
        acc[`taskCheck-${task._id}`] = task.state === 'done' ? true : false;
        return acc;
      }, {});

      setSwitchState(switchBtnsState);

      setLoading(false);
    })();
  }, []);

  const handleChange = (event) => {
    setSwitchState({
      ...switchState,
      [event.target.name]: event.target.checked,
    });
    if (event.target.checked) {
      toast.success('Task marked as completed successfuly');
    } else {
      toast.warn('Task marked as in progress !');
    }
    toggleTaskState(event.target.value)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => toast.error('Something went wrong try again later!'));
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: theme.spacing(4),
      marginTop: theme.spacing(4),
      padding: theme.spacing(4),
    },
  }));

  const classes = useStyles();

  return (
    <Container>
      <Typography variant='h2' align='center' gutterBottom>
        User Info
      </Typography>
      {isLoading && (
        <Container className={classes.root}>
          <CircularProgress color='primary' thickness={4} size={100} />
        </Container>
      )}

      {!isLoading && (
        <Grid container justify='space-evenly' spacing={6}>
          <Grid item xs={12} md={6} lg={4}>
            <ProjectDetailsCard
              title='First Name'
              description={userData.firstName}
            >
              <GroupIcon color='secondary' fontSize='large' />
            </ProjectDetailsCard>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ProjectDetailsCard
              title='Last Name'
              description={userData.lastName}
            >
              <GroupIcon color='secondary' fontSize='large' />
            </ProjectDetailsCard>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ProjectDetailsCard
              title='Date of birth'
              description={
                <time date={moment(userData.dateOfBirth).format('YYYY-MM-DD')}>
                  {moment(userData.dateOfBirth).format('D MMMM YYYY')}
                </time>
              }
            >
              <ScheduleIcon color='secondary' fontSize='large' />
            </ProjectDetailsCard>
          </Grid>
          {userData.role !== 'business-owner' && (
            <Grid item xs={12} md={6} lg={4}>
              <ProjectDetailsCard
                title='Salary'
                description={formatter.format(userData.salary)}
              >
                <MonetizationOnIcon color='secondary' fontSize='large' />
              </ProjectDetailsCard>
            </Grid>
          )}
          <Grid item xs={12} md={6} lg={4}>
            <ProjectDetailsCard title='Email' description={userData.email}>
              <EmailIcon color='secondary' fontSize='large' />
            </ProjectDetailsCard>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ProjectDetailsCard
              title='Phone'
              description={userData.phoneNumber}
            >
              <PhoneIcon color='secondary' fontSize='large' />
            </ProjectDetailsCard>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ProjectDetailsCard
              title='Organization'
              description={userData.organizationId?.name}
            >
              <BusinessIcon color='secondary' fontSize='large' />
            </ProjectDetailsCard>
          </Grid>
          {userData.role !== 'business-owner' && (
            <Grid item xs={12} md={6} lg={4}>
              <ProjectDetailsCard
                title='Team'
                description={userData.teamId?.name}
              >
                <GroupIcon color='secondary' fontSize='large' />
              </ProjectDetailsCard>
            </Grid>
          )}
          <Grid item xs={12} md={6} lg={4}>
            <ProjectDetailsCard title='Role' description={userData.role}>
              <AssignmentIndIcon color='secondary' fontSize='large' />
            </ProjectDetailsCard>
          </Grid>
          {userData.role !== 'business-owner' && (
            <Grid item xs={12}>
              <ProjectDetailsCard
                title='Assigned Tasks'
                description={userData?.tasks?.map((task) => (
                  <Grid
                    container
                    alignItems='center'
                    key={task._id}
                    spacing={3}
                  >
                    <Grid item xs>
                      <ExpansionPanel>
                        <ExpansionPanelSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls='panel1a-content'
                          id='panel1a-header'
                        >
                          <Typography variant='h4'>{task.title}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <Typography variant='body1' gutterBottom>
                            {task.description}
                          </Typography>
                        </ExpansionPanelDetails>
                        <ExpansionPanelDetails>
                          <Typography variant='subtitle2' gutterBottom>
                            DeadLine:{' '}
                            <time
                              date={moment(task.deadLine).format('YYYY-MM-DD')}
                            >
                              {moment(task.deadLine).format('D MMMM YYYY')}
                            </time>
                          </Typography>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                    </Grid>
                    {switchState != false && (
                      <Grid item>
                        <Switch
                          checked={switchState[`taskCheck-${task?._id}`]}
                          onChange={handleChange}
                          name={`taskCheck-${task?._id}`}
                          value={task?._id}
                          inputProps={{ 'task-id': task._id }}
                          disabled={userId !== match.params.id}
                        />
                      </Grid>
                    )}
                  </Grid>
                ))}
              >
                <AssignmentIcon color='secondary' fontSize='large' />
              </ProjectDetailsCard>
            </Grid>
          )}
        </Grid>
      )}
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => ({
  userId: state.auth._id,
});

export default connect(mapStateToProps)(UserDetails);
