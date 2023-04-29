import { Response } from "../util/response";

export interface TokenResponse extends Response {
  data: string;
}
