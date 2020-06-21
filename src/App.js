import React, { useState, useEffect } from 'react';

import { Route, Switch } from 'react-router-dom';
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
          <Route
            path='/projects'
            exact
            render={(props) => <Project {...props} pageSize={3} />}
          />
          <Route path='/project-details/:id' exact component={ProjectDetails} />
          <Route path='/sign-up' exact component={SignUp} />
          <Route path='/sign-in' exact component={SignIn} />
          <Route path='/team-details/:id' exact component={TeamDetails} />
          <Route path='/teams' exact component={Teams} />
          <Route path='/user-details/:id' exact component={UserDetails} />
          <Route path='/profile/:id' exact component={UserDetails} />
          <Route path='/anonymous' exact component={AnonymousHomepage} />
          <Route path='/' exact component={Homepage} />
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
