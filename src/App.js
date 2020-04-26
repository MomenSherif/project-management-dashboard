import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import Teams from './pages/Teams';

function App() {
  return (
    <Fragment>
      <ToastContainer />
      <Teams></Teams>
    </Fragment>
  );
}

export default App;
