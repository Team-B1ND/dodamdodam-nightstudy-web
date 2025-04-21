import { nightStudyProjectRoom, nightStudyProjectRoomText } from "types/Apply/apply.type";
import { Response } from "../Util/response";

export interface Place {
  id: number
  name: nightStudyProjectRoom;
  isAtv: boolean;
  title: nightStudyProjectRoomText;
}

export interface PlacesResponse extends Response {
  data: Place[];
}
