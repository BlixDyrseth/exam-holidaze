import { useContext } from "react";
import axios from "axios";
import AuthContext from "../contex/AuthContex";
import { API_URL } from "../constants/api/api";

const url = API_URL + "/";

export default function useAxios() {
  const [auth] = useContext(AuthContext);

  const apiClient = axios.create({
    baseURL: url,
  });

  apiClient.interceptors.request.use(function (config) {
    const token = auth.token;
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });

  return apiClient;
}
