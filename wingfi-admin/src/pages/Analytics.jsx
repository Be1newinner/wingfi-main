import React from 'react';
import { Outlet } from 'react-router-dom';

const Analytics = () => {
  return (
    <div>
      <h1>Analytics</h1>
      <Outlet />
    </div>
  );
};

export default Analytics;
