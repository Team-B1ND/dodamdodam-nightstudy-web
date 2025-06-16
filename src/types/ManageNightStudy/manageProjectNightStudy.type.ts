import { nightStudyProjectRoom, nightStudyType } from "types/Apply/apply.type";

export interface ProjectStudentType {
  id: number;
  name: string;
  grade: number;
  room: number;
  number: number;
  projectName: string;
  projectRoom: string;
}

export interface ProjectStudentsResponse extends Response {
  data: ProjectStudentType[];
}


export interface ProjectNightStudyMembers {
  id: number;
  name: string;
  grade: number;
  room: number;
  number: number;
  profileImage: string;
  role: "LEADER" | "MEMBER";
}

export interface ProjectNightStudy {
  id: number;
  type: "NIGHT_STUDY_PROJECT_1" | "NIGHT_STUDY_PROJECT_2";
  status: "ALLOWED" | "PENDING" | "REJECTED";
  room: nightStudyProjectRoom;
  name: string;
  description: string;
  startAt: string;
  endAt: string;
  members: ProjectNightStudyMembers[];
}

export interface ProjectNightStudyResponse extends Response {
  data: ProjectNightStudy[];
}

export interface ProjectUsingRoom {
  room: nightStudyProjectRoom;
  type: nightStudyType;
  project: string;
  startAt: string;
  endAt: string;
}

export interface ProjectUsingRoomResonse extends Response {
  data: ProjectUsingRoom[];
}