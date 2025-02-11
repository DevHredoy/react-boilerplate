import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

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



export { BASE_URL };
export default apiService;
