import React, { Fragment } from 'react';

import { Link, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import ProjectDetails from './pages/ProjectDetails';
import Homepage from './pages/Homepage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Teams from './pages/Teams';
import TeamDetails from './pages/TeamDetails';

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/project-details/:id" exact component={ProjectDetails} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/team-details" exact component={TeamDetails} />
        <Route path="/teams" exact component={Teams} />
        <Route path="/" exact component={Homepage} />
      </Switch>
      <ToastContainer />
    </Fragment>
  );
}

export default App;
