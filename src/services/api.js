import axios from "axios";

const api = axios.create({
  baseURL: "https://pharmacy-management-backend-aiqk.onrender.com"
});

export default api;