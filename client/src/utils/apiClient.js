import axios from "axios";
import globalService from "../services/globalService";

const apiClient = axios.create({
  baseURL: globalService.baseUrl,
});

apiClient.interceptors.request.use(
  (config) => {
const token = JSON.parse(localStorage.getItem("persist:root"))?.user;
const getToken = JSON.parse(token)?.currentUser?.accessToken;

    if (getToken) {
      config.headers.Authorization = `Bearer ${getToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
