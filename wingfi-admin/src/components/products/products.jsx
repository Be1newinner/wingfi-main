import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAirService } from "../../redux/selectors/serviceSelector";
import { serviceAirRequest } from "../../redux/reducers/serviceReducer";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loader from "../../utils/Loader";
import * as XLSX from "xlsx";
import { format } from "date-fns";
import { toast } from "react-toastify";
import { loadAllProductsRequest } from "../../redux/reducers/products";
import { selectProduct } from "../../redux/selectors/product";

const Products = () => {
  const productData = useSelector(selectProduct);
  console.log("productData is ", productData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [expandedRows, setExpandedRows] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    dispatch(loadAllProductsRequest());
  }, [dispatch]);

  const handlePageChange = (newPage) => {
    if (newPage > 0) {
      setPage(newPage);
      navigate(`/products?page=${newPage}`);
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
    XLSX.utils.book_append_sheet(workbook, worksheet, "Air");
    XLSX.writeFile(
      workbook,
      `air_service_${format(
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
        <h1 className="text-2xl font-bold">Products</h1>
        <button
          className="bg-indigo-600 py-2 px-4 text-white rounded-lg"
          onClick={exportToExcel}
        >
          Export
        </button>
      </div>
      <div className="w-full overflow-auto h-[calc(100vh-200px)] mb-4 px-4">
        {productData.data && productData.data.length > 0 ? (
          <>
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="px-4 py-2 border">ID</th>
                  <th className="px-4 py-2 border">Full Name</th>
                  <th className="px-4 py-2 border">Email</th>
                  <th className="px-4 py-2 border">Travel From</th>
                  <th className="px-4 py-2 border">Travel To</th>
                  <th className="px-4 py-2 border">Travel Date</th>
                  <th className="px-4 py-2 border">Class of Travel</th>
                  <th className="px-4 py-2 border">Expand</th>
                </tr>
              </thead>
              <tbody>
                {productData.data.map((data) => (
                  <React.Fragment key={data.id}>
                    <tr>
                      <td className="px-4 py-2 border">{data.id}</td>
                      <td className="px-4 py-2 border">{data.fullName}</td>
                      <td className="px-4 py-2 border">
                        <a
                          href={`mailto:${data.email}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {data.email}
                        </a>
                      </td>
                      <td className="px-4 py-2 border">{data.travelFrom}</td>
                      <td className="px-4 py-2 border">{data.travelTo}</td>
                      <td className="px-4 py-2 border">{data.travelDate}</td>
                      <td className="px-4 py-2 border">{data.classOfTravel}</td>
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
                        <td colSpan="8" className="px-4 py-2 border">
                          <table className="min-w-full bg-gray-100 border border-gray-300">
                            <thead>
                              <tr>
                                <th className="px-4 py-2 border">Age</th>
                                <th className="px-4 py-2 border">Gender</th>
                                <th className="px-4 py-2 border">Contact No</th>
                                <th className="px-4 py-2 border">Train No</th>
                                <th className="px-4 py-2 border">
                                  Time Preference
                                </th>
                                <th className="px-4 py-2 border">Adults</th>
                                <th className="px-4 py-2 border">Children</th>
                                <th className="px-4 py-2 border">Remarks</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="px-4 py-2 border">{data.age}</td>
                                <td className="px-4 py-2 border">
                                  {data.gender}
                                </td>
                                <td className="px-4 py-2 border">
                                  <a href={`tel:${data.contactNo}`}>
                                    {data.contactNo}
                                  </a>
                                </td>
                                <td className="px-4 py-2 border">
                                  {data.trainNo}
                                </td>
                                <td className="px-4 py-2 border">
                                  {data.timePreference}
                                </td>
                                <td className="px-4 py-2 border">
                                  {data.adult}
                                </td>
                                <td className="px-4 py-2 border">
                                  {data.children}
                                </td>
                                <td className="px-4 py-2 border">
                                  {data.remarks || "N/A"}
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
      {/* {userData.pagination &&
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
        )} */}
    </div>
  );
};

export default Products;
