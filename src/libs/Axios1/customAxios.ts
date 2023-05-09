import axios from "axios";
import config from "../../config/config.json";
import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/Token1/token.constant";
import cookie from "../Cookie1/cookie";
import { customAxiosErrorInterceptor } from "./interceptors";

const customAxios = axios.create({
  baseURL: config.SERVER,
  headers: {
    "Access-Control-Allow-Origin": "*",
    [REQUEST_TOKEN_KEY]: `Bearer ${cookie.getCookie(ACCESS_TOKEN_KEY)!}`,
  },
});

customAxios.interceptors.response.use(
  (res) => res,
  customAxiosErrorInterceptor
);

export default customAxios;
