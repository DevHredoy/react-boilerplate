import axios from "axios";
import { BASE_URL } from "../index";

// Create an instance of Axios for API requests
const apiClient = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});



const apiService = {

// for login api


login: (url, data) => {
  console.log("base:", BASE_URL);
  return apiClient.post(BASE_URL + url, data);
},

  create: (url, data) => {
    console.log("base:", BASE_URL);
    return apiClient.post(BASE_URL + url, data);
  },

  getAll:(url)=>{
    return apiClient.getAll(BASE_URL+url)
  }

};

export default apiService;
