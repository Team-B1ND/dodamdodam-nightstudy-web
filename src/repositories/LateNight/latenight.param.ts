// export interface ApplyLateNightPram {
//   placeId: number;
//   content: string;
//   isPhone: boolean;
//   reason: string;
//   startAt: string;
//   endAt: string;
// }

export interface ApplyLateNightPram {
  place: string;
  content: string;
  doNeedPhone: boolean;
  reasonForPhone: string;
  startAt: string;
  endAt: string;
}

export interface DeleteLateNightByIdParam {
  id: number;
}
