import { dodamAxios } from "libs/Axios/dodamAxios";
import { NightStudyBanResponse } from "types/ManageNightStudy/manageNightStudy.type";
import { NightStudyResponse } from "types/NightStudy/nightstudy.type";
import { NightStudyBanParams } from "./manageNightStudy.param";


class ManageNightStudyRepository {
  // 일반 심자 조회
  public async getNightStudys(): Promise<NightStudyResponse> {
    const { data } = await dodamAxios.get("/night-study/all");
    return data;
  }

  // 승인된 일반 심자 조회
  public async getAllowedStudys(): Promise<NightStudyResponse> {
    const { data } = await dodamAxios.get("/night-study");
    return data;
  }

  // 대기 중인 일반 심자 조회
  public async getPendingStudys(): Promise<NightStudyResponse> {
    const { data } = await dodamAxios.get("/night-study/pending");
    return data;
  }

  // id로 일반 심자 허용
  public async allowNightStudy(id: number): Promise<void> {
    await dodamAxios.patch(`/night-study/${id}/allow`);
  }
  
  // id로 일반 심자 거절
  public async rejectNightStudy(id: number): Promise<void> {
    await dodamAxios.patch(`/night-study/${id}/reject`);
  }

  // id로 일반 심자 대기
  public async revertNightStudy(id: number): Promise<void> {
    await dodamAxios.patch(`/night-study/${id}/revert`);
  }

  // 멤버 불러오기 ( 심자 정지 여부 포함 )
  public async getBanMember(): Promise<NightStudyBanResponse> {
    const { data } = await dodamAxios.get("/night-study/ban/students");
    return data;
  }

  // 심자 정지 해제
  public async deleteNightStudyBan(id: number): Promise<void> {
    await dodamAxios.delete("/night-study/ban", { params: { student: id } });
  }

  // 심자 정지
  public async createNightStudyBan(param: NightStudyBanParams): Promise<void> {
    await dodamAxios.post("/night-study/ban", param);
  }
}
const manageNightStudyRepository = new ManageNightStudyRepository();
export default manageNightStudyRepository;