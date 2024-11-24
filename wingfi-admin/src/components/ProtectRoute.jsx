/** @format */

import React, { useEffect } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // Import js-cookie to check the cookie
import { useSelector, useDispatch } from 'react-redux';
import { selectAuth } from '../redux/selectors/authSelectors';
import { authLoginRequest } from '../redux/reducers/authReducer';

// Protected route component that checks if the token is present
const ProtectRoute = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { email, role, token: storedToken } = useSelector(selectAuth);

  // useEffect(() => {
  //   dispatch(authLoginRequest());
  // }, [dispatch]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!storedToken) {
      navigate('/login');
    }
  }, [storedToken]);
  // If token exists, render the child routes
  return <Outlet />;
};

export default ProtectRoute;
