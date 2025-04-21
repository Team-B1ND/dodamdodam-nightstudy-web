import { dodamAxios } from "libs/Axios/dodamAxios";
import { StudentResponse } from "types/Member/member.type";
import { BannedSearchResponse } from "types/NightStudy/nightstudy.type";

class StudentRepository {
  public async getStudents(): Promise<StudentResponse> {
    const { data } = await dodamAxios.get("night-study/ban/students");
    return data;
  }
  public async getMyBanStatus() : Promise<BannedSearchResponse> {
    const { data } = await dodamAxios.get("night-study/ban/my");
    return data;
  }
}

const studentRepository = new StudentRepository();
export default studentRepository