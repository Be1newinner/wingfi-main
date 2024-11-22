/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectHotelService } from "../../redux/selectors/serviceSelector";
import { serviceHotelRequest } from "../../redux/reducers/serviceReducer";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loader from "../../utils/Loader";
import * as XLSX from "xlsx";
import { format } from "date-fns";
import { toast } from "react-toastify";

const Hotel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { data: userData, loading, error } = useSelector(selectHotelService);
  const [expandedRows, setExpandedRows] = useState([]);
  const limit = 10;
  const [page, setPage] = useState(parseInt(searchParams.get("page")) || 1);

  useEffect(() => {
    dispatch(serviceHotelRequest({ page, limit }));
  }, [dispatch, page, limit]);

  const handlePageChange = (newPage) => {
    if (newPage > 0) {
      setPage(newPage);
      navigate(`/service/hotel?page=${newPage}`);
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
    XLSX.utils.book_append_sheet(workbook, worksheet, "Hotel");
    XLSX.writeFile(
      workbook,
      `hotel_service_${format(
        new Date(),
        "dd-MM-yyyy_HH-mm-ss"
      )}_data-${limit}.xlsx`
    );
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-full flex justify-start flex-col h-full overflow-scroll no-scrollbar">
      <div className="flex justify-between items-center mb-5 p-5">
        <h1 className="text-2xl font-bold">Hotel Service</h1>
        <button
          className="bg-indigo-600 py-2 px-4 text-white rounded-lg"
          onClick={exportToExcel}
        >
          Export
        </button>
      </div>

      <div className="w-full overflow-auto h-[calc(100vh-200px)] mb-4 px-4">
        {userData.data.length > 0 ? (
          <>
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="px-4 py-2 border">ID</th>
                  <th className="px-4 py-2 border">Email</th>
                  <th className="px-4 py-2 border">Country</th>
                  <th className="px-4 py-2 border">City</th>
                  <th className="px-4 py-2 border">Room Category</th>
                  <th className="px-4 py-2 border">Expand</th>
                </tr>
              </thead>
              <tbody>
                {userData.data.map((data) => (
                  <React.Fragment key={data.id}>
                    <tr>
                      <td className="px-4 py-2 border">{data.id}</td>
                      <td className="px-4 py-2 border">
                        <a
                          href={`mailto:${data.email}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {data.email}
                        </a>
                      </td>
                      <td className="px-4 py-2 border">{data.country}</td>
                      <td className="px-4 py-2 border">{data.city}</td>
                      <td className="px-4 py-2 border">{data.roomCategory}</td>
                      <td className="px-4 py-2 border">
                        <button
                          className="text-blue-500 underline"
                          onClick={() => toggleRowExpansion(data.id)}
                        >
                          {expandedRows.includes(data.id) ? "Hide" : "Show"}
                        </button>
                      </td>
                    </tr>
                    {expandedRows.includes(data.id) && (
                      <tr>
                        <td colSpan="6" className="px-4 py-2 border">
                          <table className="min-w-full bg-gray-100 border border-gray-300">
                            <thead>
                              <tr>
                                <th className="px-4 py-2 border">Check-In</th>
                                <th className="px-4 py-2 border">Check-Out</th>
                                <th className="px-4 py-2 border">Nights</th>
                                <th className="px-4 py-2 border">Rooms</th>
                                <th className="px-4 py-2 border">Adults</th>
                                <th className="px-4 py-2 border">Children</th>
                                <th className="px-4 py-2 border">Infants</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="px-4 py-2 border">
                                  {data.checkInDate}
                                </td>
                                <td className="px-4 py-2 border">
                                  {data.checkOutDate}
                                </td>
                                <td className="px-4 py-2 border">
                                  {data.numberOfNights}
                                </td>
                                <td className="px-4 py-2 border">
                                  {data.numberOfRooms}
                                </td>
                                <td className="px-4 py-2 border">
                                  {data.adults}
                                </td>
                                <td className="px-4 py-2 border">
                                  {data.children}
                                </td>
                                <td className="px-4 py-2 border">
                                  {data.infants}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
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
        userData.data.length > 0 && (
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

export default Hotel;
