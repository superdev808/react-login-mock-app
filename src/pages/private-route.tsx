import { AuthContext } from '../services/contexts/auth-context';
import React, { useContext } from 'react';
import { Navigate, RouteProps } from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }: RouteProps) => {
  const { isAuthenticated } = useContext(AuthContext);

  console.log(isAuthenticated);

  return (
    isAuthenticated ? (
      <>{element}</>
    ) : (
      <Navigate to="/login" replace/>
    )
  );
};

export default PrivateRoute;