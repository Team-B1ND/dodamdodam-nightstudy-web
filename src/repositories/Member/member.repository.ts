import { dodamAxios } from "../../libs/Axios/dodamAxios";
import { MyMemberResponse } from "../../types/Member/member.type";

class MemberRepository {
  public async getMyMember(): Promise<MyMemberResponse> {
    const { data } = await dodamAxios.get("/member/my");
    return data;
  }
}
export default new MemberRepository();
