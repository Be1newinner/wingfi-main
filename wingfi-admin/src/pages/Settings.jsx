import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { userRetailRequest } from '../redux/reducers/usersReducer';

const Settings = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);

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

export default Settings;
