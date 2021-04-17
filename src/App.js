import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from './components/Admin/Admin/Admin';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import UserService from './components/UserService/UserService/UserService';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <PrivateRoute path='/user'>
          <UserService></UserService>
        </PrivateRoute>
        <PrivateRoute path='/admin'>
          <Admin></Admin>
        </PrivateRoute>
        <Route path='/login'>
          <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
