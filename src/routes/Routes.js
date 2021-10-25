/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Switch } from 'react-router';
import Layout from '../components/Layout/Layout';
import Home from '../containers/Home/Home';
import Login from '../containers/Login/Login';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import AuthLayout from '../components/AuthLayout/AuthLayout';
import Results from '../containers/Results/Results';

const Routes = () => {
  return (
    <Switch>
      <ProtectedRoute path="/" exact component={Home} layout={Layout} />
      <ProtectedRoute path="/results" exact component={Results} layout={Layout} />
      <AuthRoute path="/login" exact component={Login} layout={AuthLayout} />
    </Switch>
  );
};

export default Routes;
