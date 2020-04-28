import React, { Fragment } from 'react';

import { Link, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ProjectDetails from './pages/ProjectDetails';
// import Project from './pages/Project';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path='/project-details/:id' exact component={ProjectDetails} />
        <Route path='/project-details/:id' exact component={ProjectDetails} />
        <Route path='/sign-up' exact component={SignUp} />
      </Switch>
      <ToastContainer />
    </Fragment>
  );
}

export default App;
