import customAxios from "../../libs/Axios/customAxios";
import { Apply } from "../../types/Apply/apply.type";
import { LateNightResponse } from "../../types/LateNight/LateNight.type";

class ApplyRepository {
  public async ApplyLatenight({
    content,
    endAt,
    isPhone,
    placeId,
    reason,
    startAt,
  }: Apply): Promise<void> {
    await customAxios.post("/nightstudy", {
      content,
      endAt,
      isPhone,
      placeId,
      reason,
      startAt,
    });
  }

  public async MyLateNights(): Promise<LateNightResponse> {
    const { data } = await customAxios.get("/nightstudy/my");
    return data;
  }
}

export default new ApplyRepository();
