import { dodamAxios } from "libs/Axios/dodamAxios";
import { ProjectStudentsResponse, ProjectUsingRoomResonse, ProjectNightStudyResponse } from "types/ManageNightStudy/manageProjectNightStudy.type";

class ManageProjcetNightStudyRepository {
  // 프로젝트 심자 가져오기
  public async getProjects(): Promise<ProjectNightStudyResponse> {
    const { data } = await dodamAxios.get("/night-study/projects");
    return data;
  }

  // 승인된 프로젝트 심자 가져오기
  public async getAllowedProjects(): Promise<ProjectNightStudyResponse> {
    const { data } = await dodamAxios.get("/night-study/project/allowed");
    return data;
  }

  // 대기중인 프로젝트 심자 가져오기
  public async getPendingProjects(): Promise<ProjectNightStudyResponse> {
    const { data } = await dodamAxios.get("/night-study/project/pending");
    return data;
  }

  // 프로젝트 심자 2 중인 학생 불러오기
  public async getProjectStudents(): Promise<ProjectStudentsResponse> {
    const { data } = await dodamAxios.get("/night-study/project/students");
    return data;
  }

  // 사용중인 실 가져오기
  public async getProjectUsingLab(): Promise<ProjectUsingRoomResonse> {
    const { data } = await dodamAxios.get("night-study/project/rooms");
    return data;
  }

  // 프로젝트 심자 승인
  public async allowProject(id: number, room: string): Promise<void> {
    await dodamAxios.patch(`/night-study/project/${id}/allow/${room}`);
  }

  // 프로젝트 심자 거절
  public async rejectProject(id: number, rejectReason: string): Promise<void> {
    await dodamAxios.patch(`/night-study/project/${id}/reject`, {rejectReason});
  }

  // 프로젝트 심자 대기
  public async revertProject(id: number): Promise<void> {
    await dodamAxios.patch(`/night-study/project/${id}/revert`);
  }
}
const manageProjcetNightStudyRepository = new ManageProjcetNightStudyRepository();
export default manageProjcetNightStudyRepository;