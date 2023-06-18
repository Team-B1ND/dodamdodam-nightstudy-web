export interface ApplyLateNightPram {
  placeId: number;
  content: string;
  isPhone: boolean;
  reason: string;
  startAt: string;
  endAt: string;
}

export interface DeleteLateNightByIdParam {
  id: number;
}
