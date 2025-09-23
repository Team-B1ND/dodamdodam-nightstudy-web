import { nightStudyType, personalNightStudyType } from "types/Apply/apply.type";
import { Response } from "../Util/response";

export interface NightStudy {
  type: personalNightStudyType;
  id: number;
  content: string;
  status: "ALLOWED" | "PENDING" | "REJECTED";
  doNeedPhone: boolean;
  reasonForPhone: string | null;
  student: StudentType;
  rejectReason: string | null;
  startAt: string;
  endAt: string;
  createdAt: string;
  modifiedAt: string;
}

export interface ProjectNightStudy {
  id: number;
  type: nightStudyType;
  status: "ALLOWED" | "PENDING" | "REJECTED";
  room: string;
  name: string;
  description: string;
  startAt: string;
  endAt: string;
}

export interface StudentType {
  id: number;
  name: string;
  grade: number;
  room: number;
  number: number;
  profileImage?: string;
}

export interface BanData {
  id: number;
  student: StudentType;
  banReason: string;
  started: string;
  ended: string;
}

export interface BanDataResponse extends Response {
  data: BanData;
}

export interface NightStudyResponse extends Response {
  data: NightStudy[];
}

export interface ProjectNightStudyResponse extends Response {
  data: ProjectNightStudy[];
}

export interface ProjectRoom {
  room: string;
  type: nightStudyType;
  project: string;
  startAt: string;
  endAt: string;
}

export interface ProjectRoomsResponse {
  status: number;
  message: string;
  data: ProjectRoom[];
}