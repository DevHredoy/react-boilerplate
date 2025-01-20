import axios from "axios";
import { BASE_URL } from "../index";

// Create an instance of Axios for API requests
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const apiService = {
  create: (url, data) => {
    console.log("base:", BASE_URL);
    return apiClient.post(BASE_URL + url, data);
  },
};

export default apiService;
