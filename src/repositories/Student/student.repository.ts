import { dodamAxios } from "libs/Axios/dodamAxios";
import { StudentResponse } from "types/Member/member.type";

class StudentRepository {
  public async getStudents(): Promise<StudentResponse> {
    const { data } = await dodamAxios.get("night-study/students");
    return data;
  }
}

const studentRepository = new StudentRepository();
export default studentRepository