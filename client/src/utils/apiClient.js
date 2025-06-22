import axios from "axios";
import globalService from "../services/globalService";

const apiClient = axios.create({
  baseURL: globalService.baseUrl,
});

apiClient.interceptors.request.use(
  (config) => {
    // const token = JSON.parse(localStorage.getItem("persist:root"))?.user;
    const getToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MWNiY2E5MmEzMDFmOGY4MWNhZWYzOCIsImVtYWlsIjoib3NhbWFlbWIwMEBnbWFpbC5jb20iLCJyb2xlIjoiVVNFUiIsImlhdCI6MTc1MDYwODMzNiwiZXhwIjoxNzUwNjA5MjM2fQ.iqvO1EcwJTa5-OQ9k2B9LUqax9ANUrCWck2ko99bk4c";
    if (getToken) {
      config.headers.Authorization = `Bearer ${getToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
