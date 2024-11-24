/** @format */

import axios from 'axios';
import getToken from '../utils/getToken';
// const url = 'http://localhost:3000';
const url = 'https://api.tgestravel.com';

const apiInstance = axios.create({
  baseURL: `${url}/api/v1`,
  withCredentials: true,
});

apiInstance.interceptors.request.use(
  (config) => {
    const token = getToken(); // Assuming `authToken` is a function that retrieves the token
    // console.log("Token from interceptor", token);
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export const login = async (credentials) =>
  apiInstance.post('/dashboard/login', credentials);

export const getDashboardCorporateData = (page, limit) =>
  apiInstance.get(`/dashboard/corporate?page=${page}&limit=${limit}`);

export const getDashboardRetailData = (page, limit) =>
  apiInstance.get(`/dashboard/retail?page=${page}&limit=${limit}`);

export const getDashboardVendorData = (page, limit) =>
  apiInstance.get(`/dashboard/vendor?page=${page}&limit=${limit}`);

export const getDashboardServiceTrainData = (page, limit) =>
  apiInstance.get(`/dashboard/train?page=${page}&limit=${limit}`);

export const getDashboardServiceAirData = (page, limit) =>
  apiInstance.get(`/dashboard/air?page=${page}&limit=${limit}`);

export const getDashboardServiceBusData = (page, limit) =>
  apiInstance.get(`/dashboard/bus?page=${page}&limit=${limit}`);

export const getDashboardServiceHotelData = (page, limit) =>
  apiInstance.get(`/dashboard/hotel?page=${page}&limit=${limit}`);

export const getDashboardServiceCabData = (page, limit) =>
  apiInstance.get(`/dashboard/cab?page=${page}&limit=${limit}`);

export const getDashboardRateCardgetCabRateCard = () =>
  apiInstance.get('/dashboard/getCabRateCard');

export const getLogs = (page, limit) =>
  apiInstance.get(`/dashboard/get-logs?page=${page}&limit=${limit}`);

export const getContactDetails = (page, limit) =>
  apiInstance.get(`/dashboard/contact?page=${page}&limit=${limit}`);

export const addContactDetails = (data) =>
  apiInstance.post('/dashboard/contact', data);

export const searchContactDetails = ({ searchType, searchValue, queryString }) =>
  apiInstance.get(`/dashboard/contact/search/${searchType}/${searchValue}${queryString ? `?${queryString}` : ''}`);

export const addContactType = (data) =>
  apiInstance.post('/dashboard/contact/type', data);

export const deleteContactType = (id) =>
  apiInstance.delete(`/dashboard/contact/type/${id}`);

export const updateContactType = ({ id, type }) =>
  apiInstance.put(`/dashboard/contact/type/${id}`, { type });

export const getContactTypes = () =>
  apiInstance.get('/dashboard/contact/type');

export const getDashboardOverview = () =>
  apiInstance.get('/dashboard/overview');

export default apiInstance;
