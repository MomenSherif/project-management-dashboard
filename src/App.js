import React, { Fragment } from 'react';

import { Link, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ProjectDetails from './pages/ProjectDetails';
import Homepage from './pages/Homepage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/project-details/:id" exact component={ProjectDetails} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
      </Switch>
      <ToastContainer />
    </Fragment>
  );
}

export default App;
