import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router';

const ProtectedRoute = ({ component: Component, layout: Layout, ...rest }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // if (!isLoggedIn) {
  //   return (
  //     <Redirect
  //       to={{
  //         pathname: '/login',
  //       }}
  //     />
  //   );
  // }
  const renderComponent = () => (
    <Layout>
      <Component />
    </Layout>
  );
  return <Route {...rest} render={renderComponent} />;
};

export default ProtectedRoute;
