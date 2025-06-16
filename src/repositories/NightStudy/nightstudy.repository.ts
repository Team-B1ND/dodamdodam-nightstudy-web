import { dodamAxios } from "libs/Axios/dodamAxios";
import { BanDataResponse, NightStudyResponse, ProjectNightStudyResponse, ProjectRoom, ProjectRoomsResponse } from "types/NightStudy/nightstudy.type";
import { Response } from "types/Util/response";
import { ApplyNightStudyParam, ApplyProjectNightStudyParam } from "./nightstudy.param";

class NightStudyRepository {
  public async applyNightStudy(params: ApplyNightStudyParam): Promise<Response> {
    const { data } = await dodamAxios.post("/night-study", params);
    return data;
  }

  public async applyProjcetNightStudy(params: ApplyProjectNightStudyParam): Promise<Response> {
    const { data } = await dodamAxios.post("/night-study/project", params)
    return data;
  }

  public async getIsImBanned(): Promise<BanDataResponse> {
    const { data } = await dodamAxios.get("night-study/ban/my");
    return data;
  }

  public async getMyNightStudys(): Promise<NightStudyResponse> {
    const { data } = await dodamAxios.get("night-study/my");
    return data;
  }

  public async getMyProjectNightStudys(): Promise<ProjectNightStudyResponse> {
    const { data } = await dodamAxios.get("night-study/project/my")
    return data
  }

  public async getProjectRooms(): Promise<ProjectRoom[]> {
    const { data } = await dodamAxios.get<ProjectRoomsResponse>("night-study/project/rooms");
    return data.data;
  }
  
  public async deleteNightStudy(id: number): Promise<Response> {
    const { data } = await dodamAxios.delete(`/night-study/${id}`);
    return data;
  }

  public async deleteProjectNightStudy(id: number): Promise<Response> {
    const { data } = await dodamAxios.delete(`/night-study/project/${id}`);
    return data;
  }
}

const nightStudyRepository = new NightStudyRepository();
export default nightStudyRepository;