export interface Apply {
  content: string;
  doNeedPhone: boolean;
  reasonForPhone: string;
  startAt: string;
  endAt: string;
}

export interface ProjectApply {
  type: nightStudyType;
  startAt: string;
  endAt: string;
  room: nightStudyProjectRoom;
  title: string;
  content: string;
  members: number[];
}

export type nightStudyType = "NIGHT_STUDY_PROJECT_1" | "NIGHT_STUDY_PROJECT_2";

export type nightStudyProjectRoom = "LAB_12" | "LAB_13" | "LAB_14" | "LAB_15" | null