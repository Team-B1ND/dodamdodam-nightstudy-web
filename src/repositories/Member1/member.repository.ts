import customAxios from "../../libs/Axios1/customAxios";
import { MyMemberResponse } from "../../types/Member1/member.type";

class MemberRepository {
  public async getMyMember(): Promise<MyMemberResponse> {
    const { data } = await customAxios.get("/members/my");
    return data;
  }
}
export default new MemberRepository();
