import { Response } from "../Util/response";

export interface NightStudy {
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

export interface NightStudyResponse extends Response {
  data: NightStudy[];
}
