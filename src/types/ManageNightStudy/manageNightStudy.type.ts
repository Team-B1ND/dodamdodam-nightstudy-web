export interface StudentBanType {
  id: number;
  name: string;
  grade: number;
  room: number;
  number: number;
  phone: string;
  isBanned: boolean;
}

export interface NightStudyBanResponse extends Response {
  data: StudentBanType[];
}