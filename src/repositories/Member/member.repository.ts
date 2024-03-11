import { customAxios, dodamTestAxios } from "../../libs/Axios/customAxios";
import { MyMemberResponse } from "../../types/Member/member.type";

class MemberRepository {
  public async getMyMember(): Promise<MyMemberResponse> {
    const { data } = await dodamTestAxios.get("/members/my");
    return data;
  }
}
export default new MemberRepository();
