import React, { Fragment } from 'react';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import useStyles from './HeaderStyle';
import AnonymousNavbar from '../AnonymousNavbar/AnonymousNavbar';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <header className={classes.header}>
        <AnonymousNavbar></AnonymousNavbar>
        <Container>
          <div className={classes.headerText}>
            <Typography variant="h2" className={classes.h2}>
              Extend your business capabilities
            </Typography>
            <Link to="/sign-up" className={classes.headerLink}>
              Try for free
            </Link>
          </div>
        </Container>
      </header>
    </Fragment>
  );
};

export default Header;
