import customAxios from "../../libs/axios/customAxios";
import { Apply } from "../../types/apply/apply.type";

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
