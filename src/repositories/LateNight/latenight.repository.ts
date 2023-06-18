import customAxios from "../../libs/Axios/customAxios";
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
    isPhone,
    placeId,
    reason,
    startAt,
  }: ApplyLateNightPram): Promise<Response> {
    const { data } = await customAxios.post("/nightstudy", {
      content,
      endAt,
      isPhone,
      placeId,
      reason,
      startAt,
    });
    return data;
  }

  public async getMyLateNights(): Promise<LateNightResponse> {
    const { data } = await customAxios.get("/nightstudy/my");
    return data;
  }

  public async deleteLatenight({
    id,
  }: DeleteLateNightByIdParam): Promise<Response> {
    const { data } = await customAxios.delete(`/nightstudy/${id}`);
    return data;
  }
}

export default new LateNightRepository();
