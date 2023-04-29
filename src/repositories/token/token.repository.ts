import axios from "axios";
import { TokenResponse } from "../../types/token/token.type";
import CONFIG from "../../config/config.json";
import { TokenParam } from "./token.param";

class TokenRepository {
  public async getRefreshToken({
    refreshToken,
  }: TokenParam): Promise<TokenResponse> {
    const { data } = await axios.post(
      `${CONFIG.SERVER}/token/refresh`,
      refreshToken
    );
    return data;
  }
}

export default new TokenRepository();
