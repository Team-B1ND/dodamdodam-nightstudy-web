import { nightStudyProjectRoomNotNull, nightStudyProjectRoomTextNotNull } from "types/Apply/apply.type";

export const PROJECT_LAB_KR_TO_EN: Record<
  nightStudyProjectRoomTextNotNull,
  nightStudyProjectRoomNotNull
> = {
  "랩 1실": "LAB_1",
  "랩 2실": "LAB_2",
  "랩 8실": "LAB_8",
  "랩 13실": "LAB_13",
};
export const PROJECT_LAB_EN_TO_KR: Record<
  nightStudyProjectRoomNotNull,
  nightStudyProjectRoomTextNotNull
> = {
  "LAB_1": "랩 1실",
  "LAB_2": "랩 2실",
  "LAB_8": "랩 8실",
  "LAB_13": "랩 13실",
};
  export type ProjectLabLabel = keyof typeof PROJECT_LAB_KR_TO_EN;

  
  export const PROJECT_LAB_ROOMS: ProjectLabLabel[] = Object.keys(PROJECT_LAB_KR_TO_EN) as ProjectLabLabel[];
  