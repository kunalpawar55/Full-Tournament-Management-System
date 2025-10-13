import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const isLoggedIn = sessionStorage.getItem('loggedIn');

  useEffect(() => {
    if (isLoggedIn !== 'true') {
      alert('Login please');
    }
  }, [isLoggedIn]);

  if (isLoggedIn !== 'true') {
    return <Navigate to="/Login" />;
  }

  return children;
}
