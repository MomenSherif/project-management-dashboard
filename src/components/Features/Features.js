import React, { Fragment } from 'react';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import useStyles from './FeaturesStyle';

const Features = () => {
  const classes = useStyles();

  return (
    <div className={classes.bgWhite}>
      <Container>
        <Grid container spacing={3} className={classes.featureContainer}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.bold} gutterBottom>
              All your KPIs <span className={classes.underlined}>in </span>
              <span className={classes.underlined}>one </span>
              <span className={classes.underlined}>place.</span>
            </Typography>
            <Typography variant="body1" className={classes.featureDesc}>
              Tired of logging into multiple tools to see how your company is
              performing? View all of your performance data in one place so you
              can spend less time checking data and creating reports and more
              time acting on insights. Now all of your metrics are there in one
              dashboard to get a more complete view of your performance at a
              glance.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img className={classes.featureImage} src="centralization.png" />
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.featureContainer}>
          <Grid item display={{ xs: 'none', sm: 'inline' }} sm={6}>
            <img
              display={{ xs: 'none', sm: 'inline' }}
              className={classes.featureImage}
              src="progress.png"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.bold} gutterBottom>
              Set measurable goals and{' '}
              <span className={classes.underlined}>track </span>
              <span className={classes.underlined}>your </span>
              <span className={classes.underlined}>progress.</span>
            </Typography>
            <Typography variant="body1" className={classes.featureDesc}>
              Set goals for specific metrics in your dashboard. Track them all
              on one screen or visualize your progress toward them. Keep
              everyone focused on the metrics that matter most.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.featureContainer}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.bold} gutterBottom>
              Easily configure <span className={classes.underlined}>your </span>
              <span className={classes.underlined}>team.</span>
            </Typography>
            <Typography variant="body1" className={classes.featureDesc}>
              Form your team with a click of a button where you can assign your
              team to specific projects, assign a team leader which will be able
              to give tasks to different employees
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img className={classes.featureImage} src="team.png" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Features;
