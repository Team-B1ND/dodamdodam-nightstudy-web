export interface Apply {
  type: personalNightStudyType;
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
  name: string;
  description: string;
  students: number[];
}

export type personalNightStudyType = "NIGHT_STUDY_1" | "NIGHT_STUDY_2" | "NIGHT_STUDY_3";

export type nightStudyType = "NIGHT_STUDY_PROJECT_1" | "NIGHT_STUDY_PROJECT_2";

export type nightStudyProjectRoom = "LAB_1" | "LAB_2" | "LAB_8" | "LAB_13" | null
export type nightStudyProjectRoomNotNull =
  | "LAB_1"
  | "LAB_2"
  | "LAB_8"
  | "LAB_13";

export type nightStudyProjectRoomText = "랩 1실" | "랩 2실" | "랩 8실" | "랩 13실" | null
export type nightStudyProjectRoomTextNotNull =
  | "랩 1실"
  | "랩 2실"
  | "랩 8실"
  | "랩 13실";