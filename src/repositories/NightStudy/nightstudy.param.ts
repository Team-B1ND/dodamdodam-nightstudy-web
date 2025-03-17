export interface ApplyNightStudyPram {
  // place: string; 추후에 서버에서 추가되면 사용할 예정
  content: string;
  doNeedPhone: boolean;
  reasonForPhone: string;
  startAt: string;
  endAt: string;
}

export interface DeleteNightStudyByIdParam {
  id: number;
}
