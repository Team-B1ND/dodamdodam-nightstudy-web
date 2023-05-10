import customAxios from "../../libs/Axios/customAxios";
import { Apply } from "../../types/Apply/apply.type";

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
}

export default new ApplyRepository();
