import React from 'react';
import { Switch } from 'react-router';
import Layout from '../components/Layout/Layout';
import Home from '../containers/Home/Home';
import Login from '../containers/Login/Login';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import { useSelector } from 'react-redux';
import AuthLayout from '../components/AuthLayout/AuthLayout';

const Routes = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <Switch>
        <ProtectedRoute path='/' exact  component={Home} layout={Layout}  />
        <AuthRoute path='/login' exact component={Login} layout={AuthLayout} />
    </Switch>
  );
};

export default Routes;
