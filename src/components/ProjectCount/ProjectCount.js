import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    minHeight: '130px',
  },
  center: {
    textAlign: 'center',
  },
  projectCount: {
    display: 'inline-block',
    borderRadius: '50%',
    border: `5px solid`,
    borderColor: theme.palette.success.main,
    width: theme.spacing(7),
    height: theme.spacing(7),
    lineHeight: `45px`,
  },
}));

const ProjectCount = (props) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Paper className={classes.paper}>
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          Number of projects
        </Typography>
        <Grid
          container
          className={classes.center}
          alignItems="center"
          spacing={1}
        >
          <Grid item xs={6}>
            <Typography variant="h6">In progress</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" className={classes.projectCount}>
              7
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
};

export default ProjectCount;
