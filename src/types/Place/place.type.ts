import { nightStudyProjectRoom } from "types/Apply/apply.type";
import { Response } from "../Util/response";

export interface Place {
  id: number
  name: nightStudyProjectRoom;
  isAtv: boolean;
}

export interface PlacesResponse extends Response {
  data: Place[];
}
