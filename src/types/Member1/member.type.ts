import { ClassRoom } from "../Util1/response";

export interface Member {
  email: string;
  id: string;
  readonly joinDate: string;
  name: string;
  profileImage: null | string;
  readonly role: string;
  readonly status: "ACTIVE" | "DEACTIVATED";
}

export interface MyMemberResponse extends Response {
  data: {
    classroom: ClassRoom;
    id: number;
    member: Member;
    number: number;
    phone: string;
  };
}
