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