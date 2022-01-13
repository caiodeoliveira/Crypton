import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Access-Control-Allow-Methods": "POST, GET,",
    "Access-Control-Allow-Headers": "Access-Control-Max-Age: 86400",
  },
});

export default api;
