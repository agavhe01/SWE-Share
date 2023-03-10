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
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import NotFound from './components/layout/NotFound';

// Redux
import { Provider } from 'react-redux';
import store from './components/store';
import { loadUser } from './components/actions/auth';
import setAuthToken from './components/utils/setAuthToken';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import AddEducation from './components/profile-forms/AddEducation';
import AddExperience from './components/profile-forms/AddExperience';
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
              <Route exact path='/profiles' element={<Profiles />} />
              <Route path='/profile/:id' element={<Profile />} />
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
              <Route
                path='add-experience'
                element={<PrivateRoute component={AddExperience} />}
              />
              <Route
                path='add-education'
                element={<PrivateRoute component={AddEducation} />}
              />
              <Route
                path='posts'
                element={<PrivateRoute component={Posts} />}
              />
              <Route
                path='posts/:id'
                element={<PrivateRoute component={Post} />}
              />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
