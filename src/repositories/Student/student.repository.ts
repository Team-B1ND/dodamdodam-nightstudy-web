import { dodamAxios } from "libs/Axios/dodamAxios";
import { CheckDormitoryManagerResponse, StudentResponse } from "types/Member/member.type";

class StudentRepository {
  public async getStudents(): Promise<StudentResponse> {
    const { data } = await dodamAxios.get("night-study/students");
    return data;
  }
  public async checkDormitoryManager(): Promise<CheckDormitoryManagerResponse> {
    const { data } = await dodamAxios.get("/member/check/dormitory-manage-member");
    return data;
  }
}

const studentRepository = new StudentRepository();
export default studentRepository