import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import Teams from './pages/Teams';
import ProjectDetails from './pages/ProjectDetails';

import TeamDetails from './pages/TeamDetails';

function App() {
  return (
    <Fragment>

      <ProjectDetails></ProjectDetails>
      <ToastContainer />
      <Teams></Teams>
      <TeamDetails />
    </Fragment>
  );
}

export default App;
