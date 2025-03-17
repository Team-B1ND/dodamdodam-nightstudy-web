import { dodamAxios } from "../../libs/Axios/dodamAxios";
import { NightStudyResponse } from "../../types/NightStudy/nightstudy.type";
import { Response } from "../../types/Util/response";
import {
  DeleteNightStudyByIdParam,
  ApplyNightStudyPram,
} from "./nightstudy.param";

class NightStudyRepository {
  public async applyNightStudy(params: ApplyNightStudyPram): Promise<Response> {
    const { data } = await dodamAxios.post("/night-study", params);

    return data;
  }

  public async getMyNightStudys(): Promise<NightStudyResponse> {
    const { data } = await dodamAxios.get("night-study/my");
    return data;
  }

  public async deleteNightStudy({
    id,
  }: DeleteNightStudyByIdParam): Promise<Response> {
    const { data } = await dodamAxios.delete(`/night-study/${id}`);
    return data;
  }
}

const nightStudyRepository = new NightStudyRepository();
export default nightStudyRepository;
