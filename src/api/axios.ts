// src/api/axiosClient.ts
import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosResponse,
} from "axios";
import { getToken, removeToken } from "../utils/tokent";

const axiosClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://api.example.com",
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
  (res: AxiosResponse) => res.data,
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      removeToken();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
