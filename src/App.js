import React, { Fragment } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Teams from './pages/Teams';
import ProjectDetails from './pages/ProjectDetails';

import TeamDetails from './pages/TeamDetails';

function App() {
  return (
    <Fragment>
      <TeamDetails />
      <Teams></Teams>
      <Switch>
        <Route path='/project-details/:id' exact component={ProjectDetails} />
      </Switch>
      <ToastContainer />
    </Fragment>
  );
}

export default App;
