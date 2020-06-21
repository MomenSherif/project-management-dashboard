import React, { useState, useEffect } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AnonymousHomepage from './pages/AnonymousHomepage';
import { lightBlue } from '@material-ui/core/colors';
import ProjectDetails from './pages/ProjectDetails';
import NavBar from './components/NavBar/NavBar';
import UserDetails from './pages/UserDetails';
import TeamDetails from './pages/TeamDetails';
import { Paper } from '@material-ui/core';
import Homepage from './pages/Homepage';
import Project from './pages/Project';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Teams from './pages/Teams';

import PrivateRoute from './helper/privateRoute';
import PublicRoute from './helper/publicRoute';

function App({ token, theme }) {
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: lightBlue,
      background: {
        default: '#212121',
      },
    },
  });

  const lightTheme = createMuiTheme({
    palette: {
      type: 'light',
    },
  });

  return (
    <MuiThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <Paper
        style={{
          backgroundColor: theme === 'dark' ? '#212121' : 'transparent',
          minHeight: '100vh',
        }}
      >
        {token && <NavBar />}
        <Switch>
          <PublicRoute path='/' exact component={AnonymousHomepage} />
          <PublicRoute path='/sign-up' exact component={SignUp} />
          <PublicRoute path='/sign-in' exact component={SignIn} />

          <Route
            path='/projects'
            exact
            render={(props) => <Project {...props} pageSize={3} />}
          />
          <PrivateRoute
            path='/project-details/:id'
            exact
            component={ProjectDetails}
          />

          <PrivateRoute
            path='/team-details/:id'
            exact
            component={TeamDetails}
          />
          <PrivateRoute path='/teams' exact component={Teams} />
          <PrivateRoute
            path='/user-details/:id'
            exact
            component={UserDetails}
          />
          <PrivateRoute path='/profile/:id' exact component={UserDetails} />
          <PrivateRoute path='/dashboard' exact component={Homepage} />
          <Redirect to='/dashboard' />
        </Switch>
        <ToastContainer />
      </Paper>
    </MuiThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  theme: state.theme,
});

export default connect(mapStateToProps)(App);
