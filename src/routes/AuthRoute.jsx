/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Redirect, Route } from 'react-router';
import { useSelector } from 'react-redux';

const AuthRoute = ({ component: Component, layout: Layout, ...rest }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  if (isLoggedIn) {
    return (
      <Redirect
        to={{
          pathname: '/',
        }}
      />
    );
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default AuthRoute;
