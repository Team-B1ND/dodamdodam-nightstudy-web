import { AxiosError } from "axios";
import cookie from "../Cookie/cookie";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/Token/token.constant";
import { customAxios, dodamTestAxios } from "./customAxios";
import tokenRepository from "../../repositories/Token/token.repository";

export const customAxiosErrorInterceptor = async (config: AxiosError) => {
  const accessToken = cookie.getCookie(ACCESS_TOKEN_KEY);
  const refreshToken = cookie.getCookie(REFRESH_TOKEN_KEY);

  if (accessToken && refreshToken && config.response?.status === 401) {
    try {
      const { data } = await tokenRepository.getRefreshToken({ refreshToken });

      cookie.setCookie(ACCESS_TOKEN_KEY, data);
      dodamTestAxios.defaults.headers.common[REQUEST_TOKEN_KEY] = data;
    } catch (error) {
      window.alert("세션만료");
      cookie.removeCookie(ACCESS_TOKEN_KEY);
      cookie.removeCookie(REFRESH_TOKEN_KEY);
      window.location.href = "https://dodam.b1nd.com/sign";
    }
  }
};
