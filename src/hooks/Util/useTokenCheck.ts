import { useEffect } from "react";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/Token/token.constant";
import cookie from "../../libs/Cookie/cookie";

const useTokenCheck = () => {
  useEffect(() => {
    if (
      !cookie.getCookie(ACCESS_TOKEN_KEY) ||
      !cookie.getCookie(REFRESH_TOKEN_KEY)
    ) {
      window.alert("토큰이 없습니다");
      window.location.href = "http://dodam.b1nd.com/sign";
    }
  }, []);

  return {};
};

export default useTokenCheck;
