import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/Token1/token.constant";
import cookie from "../Cookie1/cookie";

class Token {
  public getToken(key: string): string | undefined {
    return cookie.getCookie(key);
  }

  public setToken(key: string, token: string): void {
    cookie.setCookie(key, token);
  }

  public clearToken() {
    cookie.removeCookie(ACCESS_TOKEN_KEY);
    cookie.removeCookie(REFRESH_TOKEN_KEY);
  }
}

export default new Token();