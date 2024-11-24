import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGetContactDetails } from "../redux/selectors/getContactDetailsSelector";
import { getContactDetailsRequest } from "../redux/reducers/getContactDetailsReducer";
import {
  resetSearchContactDetails,
  searchContactDetailRequest,
} from "../redux/reducers/searchContactDetailReducer";
import { selectSearchContactDetails } from "../redux/selectors/searchContactDetailSelector";
import { Search, XCircle, SearchX, Filter } from "lucide-react";
import { toast } from "react-toastify";
import CustomFilterInput from "./CustomFilterInput";

const Loader = () => (
  <div className="flex items-center justify-center py-16">
    <div className="relative">
      <div className="w-12 h-12 border-4 border-indigo-200 rounded-full"></div>
      <div className="w-12 h-12 border-4 border-indigo-600 rounded-full border-t-transparent animate-spin absolute top-0 left-0"></div>
    </div>
    <span className="ml-4 text-lg font-medium text-gray-600">Loading...</span>
  </div>
);

const ContactTable = ({ data }) => (
  <table className="min-w-full bg-white border rounded-sm border-gray-300 overflow-y-auto">
    <thead>
      <tr className="bg-gray-100">
        <th className="px-4 py-2 border">ID</th>
        <th className="px-4 py-2 border">Name</th>
        <th className="px-4 py-2 border">Email</th>
        <th className="px-4 py-2 border">Phone Number</th>
        <th className="px-4 py-2 border">Phone Number 2</th>
        <th className="px-4 py-2 border">Type</th>
        <th className="px-4 py-2 border">Profession</th>
        <th className="px-4 py-2 border">Address</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr
          key={item.id}
          className={
            index % 2 === 0
              ? "bg-white hover:bg-gray-100"
              : "bg-gray-100 hover:bg-white"
          }
        >
          <td className="px-4 py-2 border">{index + 1}</td>
          <td className="px-4 py-2 border">{item.name}</td>
          <td className="px-4 py-2 border">{item.email}</td>
          <td className="px-4 py-2 border">{item.phoneNoOne}</td>
          <td className="px-4 py-2 border">{item.phoneNoTwo}</td>
          <td className="px-4 py-2 border">{item.type}</td>
          <td className="px-4 py-2 border">{item.profession}</td>
          <td className="px-4 py-2 border">{item.address}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const NoResultsFound = ({ searchType, searchValue }) => (
  <div className="flex flex-col items-center justify-center p-6">
    <div className="bg-white border border-gray-100 shadow-lg rounded-xl p-8 max-w-md w-full">
      <div className="relative mb-6">
        <SearchX className="w-20 h-20 text-indigo-200 mx-auto" />
        <XCircle className="w-8 h-8 text-indigo-500 absolute bottom-0 right-1/3 animate-bounce" />
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mb-3 tracking-tight">
        No Results Found
      </h3>

      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <p className="text-gray-600">
          No matches found for
          <span className="inline-block bg-indigo-100 text-indigo-700 px-2 py-1 rounded mx-2 font-medium">
            "{searchValue}"
          </span>
          in {searchType}
        </p>
      </div>
    </div>
  </div>
);

function GetContactDetails() {
  const dispatch = useDispatch();
  const {
    data: userData,
    loading,
    error,
  } = useSelector(selectGetContactDetails);
  const { data: searchData, loading: searchLoading } = useSelector(
    selectSearchContactDetails
  );

  const [searchValue, setSearchValue] = useState("");
  const [searchType, setSearchType] = useState("name");
  const [page, setPage] = useState(1);
  const [hasSearched, setHasSearched] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // Filter states
  const [filters, setFilters] = useState({
    type: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
  });

  // Filter options (replace with API data)
  const filterOptions = {
    types: ["vendor", "corporate", "retail"],
    pincodes: ["10001", "10002", "10003"],
    cities: ["Delhi", "Ahmedabad"],
    states: ["Delhi", "Gujarat", "Mumbai"],
    countries: ["United States", "Canada", "Mexico", "India"],
  };

  const limit = 10;

  useEffect(() => {
    // Initial load without search
    if (!hasSearched) {
      dispatch(getContactDetailsRequest({ page, limit }));
    }
    return () => {
      dispatch(resetSearchContactDetails());
    };
  }, [dispatch, page, limit, hasSearched]);

  // Construct query string from filters
  const getQueryString = () => {
    const queryParams = new URLSearchParams();

    if (filters.type) {
      queryParams.append("type", filters.type);
    }

    if (filters.pincode) {
      queryParams.append("pincode", filters.pincode);
    }

    if (filters.city) {
      queryParams.append("city", filters.city);
    }

    if (filters.state) {
      queryParams.append("state", filters.state);
    }

    if (filters.country) {
      queryParams.append("country", filters.country);
    }

    return queryParams.toString();
  };

  const handleSearch = () => {
    if (searchValue.trim() === "" && !filters.type && !filters.pincode && !filters.city && !filters.state && !filters.country) {
      setHasSearched(false);
      dispatch(resetSearchContactDetails());
      dispatch(getContactDetailsRequest({ page, limit }));
      return;
    }

    setHasSearched(true);
    const queryString = getQueryString();

    dispatch(
      searchContactDetailRequest({
        searchType,
        searchValue,
        queryString,
      })
    );
  };

  const handleSearchInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    if (
      value.trim() === "" &&
      !filters.type &&
      !filters.pincode &&
      !filters.state &&
      !filters.country &&
      !filters.city
    ) {
      setHasSearched(false);
      dispatch(resetSearchContactDetails());
      dispatch(getContactDetailsRequest({ page, limit }));
    }
  };

  const handleFilterChange = (filterType, value) => {
    const newFilters = {
      ...filters,
      [filterType]: value,
    };
    setFilters(newFilters);

    // If we have any active filters or search value, perform search
    if (
      value ||
      searchValue.trim() ||
      newFilters.type ||
      newFilters.pincode ||
      newFilters.state ||
      newFilters.country ||
      newFilters.city
    ) {
      setHasSearched(true);
      dispatch(
        searchContactDetailRequest({
          searchType,
          searchValue,
          queryString: new URLSearchParams({
            ...(newFilters.type && { type: newFilters.type }),
            ...(newFilters.pincode && { pincode: newFilters.pincode }),
            ...(newFilters.city && { city: newFilters.city }),
            ...(newFilters.state && { state: newFilters.state }),
            ...(newFilters.country && { country: newFilters.country }),
          }).toString(),
        })
      );
    }
  };

  const clearFilters = () => {
    setFilters({
      type: "",
      pincode: "",
      city: "",
      state: "",
      country: "",
    });

    // If there's a search value, search without filters
    if (searchValue.trim()) {
      dispatch(
        searchContactDetailRequest({
          searchType,
          searchValue,
        })
      );
    } else {
      // If no search value, reset to initial state
      setHasSearched(false);
      dispatch(resetSearchContactDetails());
      dispatch(getContactDetailsRequest({ page, limit }));
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= userData.pagination.total_pages) {
      setPage(newPage);

      // If we're in search mode, include search and filters in pagination
      if (hasSearched) {
        const queryString = getQueryString();
        dispatch(
          searchContactDetailRequest({
            searchType,
            searchValue,
            page: newPage,
            limit,
            queryString,
          })
        );
      }
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(`Error: ${error}`);
    }
  }, [error]);

  const displayData = !hasSearched ? userData.data : searchData;
  const showNoResults =
    hasSearched && searchData && searchData.length === 0 && !searchLoading;

  return (
    <div className="flex flex-col h-screen">
      {/* Header Section */}
      <div className="flex-none p-5">
        <h1 className="text-3xl font-bold mb-4">Contact Details</h1>

        <div className="mb-6">
          {/* Search and Filter Controls */}
          <div className="flex flex-col gap-4 mb-4">
            {/* Search Row */}
            <div className="flex gap-4">
              <select
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                className="p-2 border rounded-lg w-32"
              >
                <option value="name">Name</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="type">Type</option>
                <option value="profession">Profession</option>
              </select>

              <div className="w-full relative flex gap-4">
                <input
                  type="text"
                  value={searchValue}
                  onChange={handleSearchInputChange}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                  placeholder="Search..."
                  className="w-full p-2 pl-10 border rounded-lg"
                />
                <button className="absolute left-2 top-2.5">
                  <Search className="h-5 w-5 text-gray-400" />
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={handleSearch}
                    disabled={loading || searchLoading}
                    className={`text-white bg-indigo-600 hover:bg-indigo-800 py-2 px-4 rounded-lg transition-all duration-300 ease-in-out ${
                      loading || searchLoading
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {searchLoading ? "Searching..." : "Search"}
                  </button>

                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
                  >
                    <Filter className="h-5 w-5" />
                    Filters
                    {(filters.type || filters.location) && (
                      <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
                        {Object.values(filters).filter(Boolean).length}
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Filter Row */}
            {showFilters && (
              <div className="flex gap-4 items-center bg-gray-50 p-4 rounded-lg">
                <div className="flex gap-4 flex-1">
                  <CustomFilterInput
                    value={filters.type}
                    onChange={(value) => handleFilterChange("type", value)}
                    options={filterOptions.types}
                    placeholder="Type"
                  />

                  <CustomFilterInput
                    value={filters.pincode}
                    onChange={(value) => handleFilterChange("pincode", value)}
                    options={filterOptions.pincodes}
                    placeholder="Pincode"
                  />

                  <CustomFilterInput
                    value={filters.city}
                    onChange={(value) => handleFilterChange("city", value)}
                    options={filterOptions.cities}
                    placeholder="City"
                  />

                  <CustomFilterInput
                    value={filters.state}
                    onChange={(value) => handleFilterChange("state", value)}
                    options={filterOptions.states}
                    placeholder="State"
                  />

                  <CustomFilterInput
                    value={filters.country}
                    onChange={(value) => handleFilterChange("country", value)}
                    options={filterOptions.countries}
                    placeholder="Country"
                  />
                </div>

                {(filters.type ||
                  filters.pincode ||
                  filters.state ||
                  filters.country ||
                  filters.city) && (
                  <button
                    onClick={clearFilters}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        <h2 className="text-2xl font-bold">
          {hasSearched ? "Search Results" : "All Contacts"}
        </h2>
      </div>

      {/* Table Section - Scrollable */}
      <div className="flex-grow overflow-auto h-[calc(100vh-500px)] px-5">

        {loading || searchLoading ? (
          <Loader />
        ) : showNoResults ? (
          <NoResultsFound searchType={searchType} searchValue={searchValue} />
        ) : displayData && displayData.length > 0 ? (
          <ContactTable data={displayData} />
        ) : (
          <p className="text-center text-gray-600 text-xl font-bold py-10">
            No data found
          </p>
        )}
      </div>

      {/* Pagination Section - Fixed at bottom */}
      {!hasSearched && displayData && displayData.length > 0 && (
        <div className="flex-none bg-white p-5 border-t border-gray-300">
          <div className="flex justify-between max-w-full mx-auto">
            <button
              onClick={() =>
                handlePageChange(userData.pagination.current_page - 1)
              }
              disabled={userData.pagination.current_page === 1}
              className={`bg-indigo-600 py-2 px-4 text-white rounded-lg ${
                userData.pagination.current_page === 1
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              Previous
            </button>

            <span className="bg-indigo-600 px-4 py-2 text-white rounded-lg">
              Page {userData.pagination.current_page} of{" "}
              {userData.pagination.total_pages}
            </span>

            <button
              onClick={() =>
                handlePageChange(userData.pagination.current_page + 1)
              }
              disabled={
                userData.pagination.current_page ===
                userData.pagination.total_pages
              }
              className={`bg-indigo-600 py-2 px-4 text-white rounded-lg ${
                userData.pagination.current_page ===
                userData.pagination.total_pages
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
}

export default GetContactDetails;
