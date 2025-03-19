import { dodamAxios } from "src/libs/Axios/dodamAxios";
import { NightStudyResponse } from "src/types/NightStudy/nightstudy.type";
import { Response } from "src/types/Util/response";
import { ApplyNightStudyPram } from "./nightstudy.param";

class NightStudyRepository {
  public async applyNightStudy(params: ApplyNightStudyPram): Promise<Response> {
    const { data } = await dodamAxios.post("/night-study", params);

    return data;
  }

  public async getMyNightStudys(): Promise<NightStudyResponse> {
    const { data } = await dodamAxios.get("night-study/my");
    return data;
  }

  public async deleteNightStudy(id: number): Promise<Response> {
    const { data } = await dodamAxios.delete(`/night-study/${id}`);
    return data;
  }
}

const nightStudyRepository = new NightStudyRepository();
export default nightStudyRepository;
