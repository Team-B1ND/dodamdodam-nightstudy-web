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

export type nightStudyProjectRoom = "LAB_12" | "LAB_13" | "LAB_14" | "LAB_15" | null

export type nightStudyProjectRoomText = "랩 12실" | "랩 13실" | "랩 14실" | "랩 15실" | null