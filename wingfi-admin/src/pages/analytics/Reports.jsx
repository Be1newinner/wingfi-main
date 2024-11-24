import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { selectCorporateUser } from '../../redux/selectors/userSelectors';
import { userRetailRequest } from '../../redux/reducers/usersReducer';

const Reports = () => {
  

  const dispatch = useDispatch();
  const userData = useSelector(selectCorporateUser);

  useEffect(() => {
    dispatch(userRetailRequest());
  }, [dispatch]);

  return (
    <div>
      <h1>Settings</h1>
      <Outlet />
    </div>
  );
};

export default Reports;
