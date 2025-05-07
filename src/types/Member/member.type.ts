export interface Student {
  id: number;
  name: string;
  grade: number;
  room: number;
  profileImage: string,
  number: number;
  isBanned: boolean;
}

export interface StudentResponse extends Response {
  data: Student[];
}
