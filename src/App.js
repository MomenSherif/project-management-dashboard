import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import Teams from './pages/Teams';

import TeamDetails from './pages/TeamDetails';

function App() {
  return (
    <Fragment>
      <ToastContainer />
      {/* <Teams></Teams> */}
      <TeamDetails />
    </Fragment>
  );
}

export default App;
