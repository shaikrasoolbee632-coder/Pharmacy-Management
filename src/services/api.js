import axios from "axios";

const api = axios.create({
  baseURL: "https://pharmacy-management-backend-1.onrender.com"
});

export default api;