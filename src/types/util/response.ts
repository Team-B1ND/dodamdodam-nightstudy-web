export interface Response {
  message: string;
  status: number;
}

export interface ClassRoom {
  readonly grade: number;
  readonly id: number;
  readonly placeId: number;
  readonly room: number;
}
