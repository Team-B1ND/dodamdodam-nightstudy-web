export interface Student {
  id: number;
  name: string;
  grade: number;
  room: number;
  number: number;
  isBanned: boolean;
}

export interface StudentResponse extends Response {
  data: Student[];
}
