import React, { Fragment } from 'react';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import useStyles from './PlansStyle';
import { Link } from 'react-router-dom';

const Plans = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container spacing={3} className={classes.planContainer}>
        <Grid item xs={12} sm={4}>
          <div className={classes.flipCard}>
            <div className={classes.flipCardInner}>
              <div className={classes.flipCardFront}>
                <Typography variant="h4" className={classes.planTitle}>
                  Basic
                </Typography>
                <div className="price">
                  <span className={classes.currency}>$</span>
                  <span className={classes.value}>20</span>
                  <span className={classes.duration}>/mo</span>
                </div>

                <ul className={classes.pricingFeatures}>
                  <li>
                    <em className={classes.em}>1</em> Organization
                  </li>
                  <li>
                    <em>20</em> Employees
                  </li>
                  <li>
                    <em>20</em> Projects per organization
                  </li>
                  <li>
                    <em>5</em> Employees per Team
                  </li>
                  <li>
                    <em>No</em> Chat Room
                  </li>
                </ul>
                <footer className="pricing-footer">
                  <Link to="/sign-up" className={classes.link}>
                    Sign Up
                  </Link>
                </footer>
              </div>
              <div className={classes.flipCardBack}>
                <Typography variant="h6">Back of first plan</Typography>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.flipCard}>
            <div className={classes.flipCardInner}>
              <div className={classes.flipCardFront}>
                <div className={classes.premium}>
                  <Typography variant="h4" className={classes.planTitle}>
                    Premium
                  </Typography>
                  <div className="price">
                    <span className={classes.currency}>$</span>
                    <span className={classes.value}>40</span>
                    <span className={classes.duration}>/mo</span>
                  </div>
                  <ul className={classes.pricingFeatures}>
                    <li>
                      <em className={classes.em}>Unlimited</em> Organizations
                    </li>
                    <li>
                      <em>Unlimited</em> Employees
                    </li>
                    <li>
                      <em>Unlimited</em> Projects
                    </li>
                    <li>
                      <em>Unlimited</em> Employees per Team
                    </li>
                    <li>
                      <em></em> Chat Room
                    </li>
                  </ul>
                  <footer className="pricing-footer">
                    <Link to="/sign-up" className={classes.link}>
                      Sign Up
                    </Link>
                  </footer>
                </div>
              </div>
              <div className={classes.flipCardBack}>
                <Typography variant="h6">Back of first plan</Typography>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.flipCard}>
            <div className={classes.flipCardInner}>
              <div className={classes.flipCardFront}>
                <Typography variant="h4" className={classes.planTitle}>
                  Business
                </Typography>
                <div className="price">
                  <span className={classes.currency}>$</span>
                  <span className={classes.value}>30</span>
                  <span className={classes.duration}>/mo</span>
                </div>

                <ul className={classes.pricingFeatures}>
                  <li>
                    <em className={classes.em}>3</em> Organizations
                  </li>
                  <li>
                    <em>50</em> Employees
                  </li>
                  <li>
                    <em>30</em> Projects per Organization
                  </li>
                  <li>
                    <em>10</em> Employees per Team
                  </li>
                  <li>
                    <em>No</em> Chat Room
                  </li>
                </ul>
                <footer className="pricing-footer">
                  <Link to="/sign-up" className={classes.link}>
                    Sign Up
                  </Link>
                </footer>
              </div>
              <div className={classes.flipCardBack}>
                <Typography variant="h6">Back of first plan</Typography>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Plans;
