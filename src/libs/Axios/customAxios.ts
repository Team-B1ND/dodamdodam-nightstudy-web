import axios from "axios";
import config from "../../config/config.json";
import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/Token/token.constant";
import cookie from "../Cookie/cookie";
import { customAxiosErrorInterceptor } from "./interceptors";

export const customAxios = axios.create({
  baseURL: config.SERVER,
  headers: {
    "Access-Control-Allow-Origin": "*",
    [REQUEST_TOKEN_KEY]: `Bearer ${cookie.getCookie(ACCESS_TOKEN_KEY)!}`,
  },
});

export const dodamTestAxios = axios.create({
  baseURL: config.DODAM_TEST_SERVER,
  headers: {
    "Access-Control-Allow-Origin": "*",
    [REQUEST_TOKEN_KEY]: `Bearer ${cookie.getCookie(ACCESS_TOKEN_KEY)!}`,
  },
});

dodamTestAxios.interceptors.response.use(
  (res) => res,
  customAxiosErrorInterceptor
);

// export default dodamTestAxios;
