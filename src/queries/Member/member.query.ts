import { UseQueryOptions, useQuery } from "react-query";
import memberRepository from "../../repositories/Member/member.repository";
import { MyMemberResponse } from "../../types/Member/member.type";
import { AxiosError } from "axios";
export const useGetMyMember = (
  options?: UseQueryOptions<
    MyMemberResponse,
    AxiosError,
    MyMemberResponse,
    "member/getMyMember"
  >
) =>
  useQuery("member/getMyMember", () => memberRepository.getMyMember(), {
    ...options,
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });
