import { Place } from "types/Place/place.type";

export const PLACE_ITEMS : Place[] = [
  { id: 1, name: "LAB_1", title: "랩 1실", isAtv: false },
  { id: 2, name: "LAB_2", title: "랩 2실", isAtv: false },
  { id: 3, name: "LAB_8", title: "랩 8실", isAtv: false },
  { id: 4, name: "LAB_13", title: "랩 13실", isAtv: false },
];

export const NIGHT_STUDY_TIME = {
  "NIGHT_STUDY_1": "심자 1",
  "NIGHT_STUDY_2": "심자 2",
  "NIGHT_STUDY_3": "심자 3",
  "NIGHT_STUDY_PROJECT_1": "심자 1",
  "NIGHT_STUDY_PROJECT_2": "심자 2",
  "NIGHT_STUDY_PROJECT_3": "심자 3",
}

export const NIGHTSTUDY_BAN_REASONS = [
  "허가 없는 휴대폰 사용",
  "심자 목적에 맞지 않는 행위",
  "신청 후 불참",
  "심자 무단 이탈",
  "타인 방해 (소란 등)",
  "기타",
];