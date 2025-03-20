import axios from "axios";
import { AuthResponse } from "types/Auth/token.type";
import CONFIG from "config/config.json";
import { AuthParam } from "./auth.param";

class AuthRepository {
  public async getRefreshToken({
    refreshToken,
  }: AuthParam): Promise<AuthResponse> {
    const { data } = await axios.post(
      `${CONFIG.SERVER}/auth/reissue`,
      refreshToken
    );
    return data;
  }
}
const authRepository = new AuthRepository();
export default authRepository;
