import React, { Fragment } from 'react';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import useStyles from './AnonymousNavbarStyle';
import { Link } from 'react-router-dom';

const AnonymousNavbar = () => {
  const classes = useStyles();

  return (
    <nav className={classes.navbar}>
      <Container className={classes.navContainer}>
        <Link className={classes.brand}>—Board</Link>
        <div className={classes.navRight}>
          {/* <Link to="/sign-up" className={classes.navItem}>
            Sign Up
          </Link> */}
          <Link to='/sign-in' className={classes.navItem}>
            Log in
          </Link>
        </div>
      </Container>
    </nav>
  );
};

export default AnonymousNavbar;
