/** @format */

import React from 'react';
import { format } from 'date-fns';
import * as XLSX from 'xlsx';

const CommonHeaderRoute = ({ title, userData, worksheetName }) => {
  const formatTitle = (title) => {
    return title.toLowerCase().split(' ').join('_');
  };

  const getWorksheetName = (title) => {
    return title.toLowerCase().split(' ')[0];
  };

  const limit = 10;

  //   console.log(getWorksheetName(title));

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(userData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, getWorksheetName(title));
    XLSX.writeFile(
      workbook,
      `${formatTitle(title)}_${format(
        new Date(),
        'dd-MM-yyyy_HH-mm-ss',
      )}_data-${limit}.xlsx`,
    );
  };
  return (
    <div className="flex justify-between items-center mb-5">
      <h1 className="mb-4 text-3xl uppercase tracking-wider font-semibold text-indigo-600">
        {title}
      </h1>
      <button
        className="bg-indigo-600 py-2 px-4 text-white rounded-lg"
        onClick={exportToExcel}
      >
        Export
      </button>
    </div>
  );
};

export default CommonHeaderRoute;
