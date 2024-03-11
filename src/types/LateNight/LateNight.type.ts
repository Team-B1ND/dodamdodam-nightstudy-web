import { Response } from "../Util/response";

// export interface LateNight {
//   id: number;
//   content: string;
//   allowCheck: "ALLOWED" | "PENDING" | "DENIED";
//   isPhone: boolean;
//   reason: string;
//   student: {
//     name: string;
//     grade: number;
//     room: number;
//     number: number;
//   };
//   place: string;
//   startAt: string;
//   endAt: string;
//   createdAt: string;
//   checkedAt: boolean;
// }

export interface LateNight {
  id: number;
  content: string;
  status: "ALLOWED" | "PENDING" | "DENIED";
  doNeedPhone: boolean;
  reasonForPhone: string;
  student: StudentType;
  place: string;
  startAt: string;
  endAt: string;
  createdAt: string;
  modifiedAt: string;
}

export interface StudentType {
  id: number;
  name: string;
  grade: number;
  room: number;
  number: number;
}
export interface LateNightResponse extends Response {
  data: LateNight[];
}
