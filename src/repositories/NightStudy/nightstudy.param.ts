export interface ApplyNightStudyPram {
  place: string;
  content: string;
  doNeedPhone: boolean;
  reasonForPhone: string;
  startAt: string;
  endAt: string;
}

export interface DeleteNightStudyByIdParam {
  id: number;
}
