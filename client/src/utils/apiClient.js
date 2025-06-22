import axios from "axios";
import globalService from "../services/globalService";

const apiClient = axios.create({
  baseURL: globalService.baseUrl,
});

apiClient.interceptors.request.use(
  (config) => {
    // const token = JSON.parse(localStorage.getItem("persist:root"))?.user;
    const getToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MWNiY2E5MmEzMDFmOGY4MWNhZWYzOCIsImVtYWlsIjoib3NhbWFlbWIwMEBnbWFpbC5jb20iLCJyb2xlIjoiVVNFUiIsImlhdCI6MTc1MDYxNzc1OSwiZXhwIjoxNzUwNjE4NjU5fQ.IWoxI5yRMsjii9k6h5IxVxxXUpzFad8qI75Zm_sa8yA";
    if (getToken) {
      config.headers.Authorization = `Bearer ${getToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
