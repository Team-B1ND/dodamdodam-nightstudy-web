import { dodamAxios } from "libs/Axios/dodamAxios";
import { StudentResponse } from "types/Member/member.type";

class StudentRepository {
  public async getStudents(): Promise<StudentResponse> {
    const { data } = await dodamAxios.get("night-study/students");
    return data;
  }
  public async checkDormitoryManager(): Promise<boolean> {
    const { data } = await dodamAxios.get("/member/check/dormitory-manage-member");
    return data;
  }
}

const studentRepository = new StudentRepository();
export default studentRepository