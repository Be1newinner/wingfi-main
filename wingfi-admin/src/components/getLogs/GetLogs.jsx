/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGetLog } from "../../redux/selectors/getLogSelectors";
import { getLogRequest } from "../../redux/reducers/getLogReducer";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loader from "../../utils/Loader";
import { toast } from "react-toastify";
import * as XLSX from "xlsx";
import { format } from "date-fns";
import ErrorPage from "../../utils/ErrorPage";

const GetLogs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { data: userData, loading, error } = useSelector(selectGetLog);
  const [expandedRows, setExpandedRows] = useState([]);
  const limit = 10;
  const [page, setPage] = useState(parseInt(searchParams.get("page")) || 1);

  useEffect(() => {
    dispatch(getLogRequest({ page, limit }));
  }, [dispatch, page, limit]);

  const handlePageChange = (newPage) => {
    if (newPage > 0) {
      setPage(newPage);
      navigate(`/getlogs?page=${newPage}`);
    }
  };

  const toggleRowExpansion = (id) => {
    if (expandedRows.includes(id)) {
      setExpandedRows(expandedRows.filter((rowId) => rowId !== id));
    } else {
      setExpandedRows([...expandedRows, id]);
    }
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(userData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Logs");
    XLSX.writeFile(
      workbook,
      `logs_${format(new Date(), "dd-MM-yyyy_HH-mm-ss")}_data-${limit}.xlsx`
    );
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-full flex flex-col justify-start  h-full overflow-scroll no-scrollbar">
      <div className="flex justify-between items-center mb-5 p-5">
        <h1 className="text-2xl font-bold">Logs</h1>
        <button
          onClick={exportToExcel}
          className="bg-indigo-600 py-2 px-4 text-white rounded-lg"
        >
          Export
        </button>
      </div>

      <div className="w-full overflow-auto h-[calc(100vh-100px)] mb-4 px-4">
        {userData?.data?.length > 0 ? (
          <>
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 border">ID</th>
                  <th className="px-4 py-2 border">User ID</th>
                  <th className="px-4 py-2 border">Action</th>
                  <th className="px-4 py-2 border">User Type</th>
                  <th className="px-4 py-2 border">Message</th>
                  <th className="px-4 py-2 border">Created At</th>
                </tr>
              </thead>
              <tbody>
                {userData.data.map((data, index) => (
                  <tr
                    key={data.id}
                    className={
                      index % 2 === 0
                        ? "bg-white hover:bg-gray-100"
                        : "bg-gray-100 hover:bg-white"
                    }
                  >
                    <td className="px-4 py-2 border">{data.id}</td>
                    <td className="px-4 py-2 border">{data.userId}</td>
                    <td className="px-4 py-2 border">{data.action}</td>
                    <td className="px-4 py-2 border">{data.userType}</td>
                    <td className="px-4 py-2 border">{data.message}</td>
                    <td className="px-4 py-2 border">
                      {new Date(data.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <p className="text-center text-gray-600 text-2xl font-bold py-10">
            No data found
          </p>
        )}
      </div>

      {/* Pagination */}
      {userData.pagination &&
        userData.pagination.total_pages > 1 &&
        userData?.data?.length > 0 && (
          <div className="flex-none bg-white p-5 border-t border-gray-300">
            <div className="flex justify-between max-w-full mx-auto">
              <button
                onClick={() =>
                  handlePageChange(userData.pagination?.current_page - 1)
                }
                disabled={userData.pagination?.current_page === 1}
                className={`bg-indigo-600 py-2 px-4 text-white rounded-lg ${
                  userData.pagination?.current_page === 1
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                Previous
              </button>

              <span className="bg-indigo-600 px-4 py-2 text-white rounded-lg">
                Page {userData.pagination?.current_page} of{" "}
                {userData.pagination?.total_pages}
              </span>

              <button
                onClick={() =>
                  handlePageChange(userData.pagination?.current_page + 1)
                }
                disabled={
                  userData.pagination?.current_page ===
                  userData.pagination?.total_pages
                }
                className={`bg-indigo-600 py-2 px-4 text-white rounded-lg ${
                  userData.pagination?.current_page ===
                  userData.pagination?.total_pages
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                Next
              </button>
            </div>
          </div>
        )}
    </div>
  );
};

export default GetLogs;
