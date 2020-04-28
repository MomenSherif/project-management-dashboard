import React, { Fragment } from 'react';
import ProjectCount from './components/ProjectCount/ProjectCount';
import Homepage from './pages/Homepage';

import { Link, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ProjectDetails from './pages/ProjectDetails';
// import Project from './pages/Project';

function App() {
  return (
    <Fragment>
      {/* <Project></Project> */}
      <Switch>
        <Route path="/project-details/:id" exact component={ProjectDetails} />
      </Switch>
      <ToastContainer />
    </Fragment>
  );
}

export default App;
