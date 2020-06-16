import React, { Fragment } from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Plans from '../components/Plans/Plans';
import Header from '../components/Header/Header';
import Features from '../components/Features/Features';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  pt: {
    paddingTop: theme.spacing(2),
  },
}));

const AnonymousHomepage = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Header></Header>
      <Features></Features>
      <Container className={classes.pt}>
        <Plans></Plans>
      </Container>
    </Fragment>
  );
};

export default AnonymousHomepage;
