import axios from "axios";
import globalService from "../services/globalService";

const apiClient = axios.create({
  baseURL: globalService.baseUrl,
});

apiClient.interceptors.request.use(
  (config) => {
    // const token = JSON.parse(localStorage.getItem("persist:root"))?.user;
    const getToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NTIwMTBhNzhhZTQ3ZTI1NGNmODI1NiIsImVtYWlsIjoieWFzbWVlbi5tYWhtb3VkMTYxMEBnbWFpbC5jb20iLCJyb2xlIjoiVVNFUiIsImlhdCI6MTc1MDcwODM0OSwiZXhwIjoxNzUwNzA5MjQ5fQ.gCm9OO7tqIxZpIWJhZtaRAECGdyY4IxW6g50DfDVnz0";
    if (getToken) {
      config.headers.Authorization = `Bearer ${getToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
