import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import switch replaced by Routes
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/alert';
import './App.css';

import CreateProfile from './components/profile-forms/CreateProfile';
// Redux
import { Provider } from 'react-redux';
import store from './components/store';
import { loadUser } from './components/actions/auth';
import setAuthToken from './components/utils/setAuthToken';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
//
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []); // empty braces at the end make sure it only runs once-> component dismount

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Landing />} />
          </Routes>
          <section className='container'>
            <Alert />
            <Routes>
              <Route exact path='/register' element={<Register />} />
              <Route exact path='/login' element={<Login />} />
              <Route
                path='dashboard'
                element={<PrivateRoute component={Dashboard} />}
              />
              <Route
                path='create-profile'
                element={<PrivateRoute component={CreateProfile} />}
              />
              <Route
                path='edit-profile'
                element={<PrivateRoute component={CreateProfile} />}
              />
            </Routes>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
