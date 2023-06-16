import customAxios from "../../libs/Axios/customAxios";
import { Apply } from "../../types/Apply/apply.type";
import { LateNightResponse } from "../../types/LateNight/LateNight.type";
import { Response } from "../../types/Util/response";
import { DeleteByIdParam } from "./apply.param";

class ApplyRepository {
  public async ApplyLatenight({
    content,
    endAt,
    isPhone,
    placeId,
    reason,
    startAt,
  }: Apply): Promise<Response> {
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

  public async MyLateNights(): Promise<LateNightResponse> {
    const { data } = await customAxios.get("/nightstudy/my");
    return data;
  }

  public async DeleteLatenight({ id }: DeleteByIdParam): Promise<Response> {
    const { data } = await customAxios.delete(`/nightstudy/${id}`);
    return data;
  }
}

export default new ApplyRepository();
