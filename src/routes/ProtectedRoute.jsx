import React from 'react';
import { useSelector } from 'react-redux';
import { Route,Redirect } from 'react-router';

const ProtectedRoute = ({ component,layout,...props }) => {

  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <Redirect to='/login' />
  }

  return <Route {...props}  />;
};

export default ProtectedRoute;
