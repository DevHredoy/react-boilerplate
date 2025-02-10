import axios from "axios";
import { BASE_URL } from "../index";

// Create an instance of Axios for API requests
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("tokken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const apiService = {
  login: (url, data) => {
    return apiClient.post(url, data);
  },

  create: (url, data) => {
    return apiClient.post(url, data);
  },

  getAll: (url) => {
    return apiClient.get(url);
  },
};

export default apiService;
