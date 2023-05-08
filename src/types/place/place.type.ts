import { Response } from "../Util/response";

export interface Place {
  id: number;
  name: string;
}

export interface PlacesResponse extends Response {
  data: Place[];
}
