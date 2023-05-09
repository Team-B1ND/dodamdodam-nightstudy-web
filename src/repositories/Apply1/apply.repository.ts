import customAxios from "../../libs/Axios1/customAxios";
import { Apply } from "../../types/Apply1/apply.type";

class ApplyRepository {
  public async ApplyLatenight({
    content,
    endAt,
    isPhone,
    placeId,
    reason,
    startAt,
  }: Apply): Promise<void> {
    await customAxios.post("/evening", {
      content,
      endAt,
      isPhone,
      placeId,
      reason,
      startAt,
    });
  }
}

export default new ApplyRepository();
