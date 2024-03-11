import { customAxios, dodamTestAxios } from "../../libs/Axios/customAxios";
import { LateNightResponse } from "../../types/LateNight/LateNight.type";
import { Response } from "../../types/Util/response";
import {
  DeleteLateNightByIdParam,
  ApplyLateNightPram,
} from "./latenight.param";

class LateNightRepository {
  public async applyLatenight({
    content,
    endAt,
    doNeedPhone,
    place,
    reasonForPhone,
    startAt,
  }: ApplyLateNightPram): Promise<Response> {
    const { data } = await dodamTestAxios.post("/night-study", {
      content,
      endAt,
      doNeedPhone,
      place,
      reasonForPhone,
      startAt,
    });
    return data;
  }

  public async getMyLateNights(): Promise<LateNightResponse> {
    const { data } = await dodamTestAxios.get("/night-study/my");
    return data;
  }

  public async deleteLatenight({
    id,
  }: DeleteLateNightByIdParam): Promise<Response> {
    const { data } = await dodamTestAxios.delete(`/night-study/${id}`);
    return data;
  }
}

export default new LateNightRepository();
