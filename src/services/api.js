import axios from "axios";

const api = axios.create({
  baseURL: "http://pharmacy-management-backend-1.onrender.com"
});

export default api;