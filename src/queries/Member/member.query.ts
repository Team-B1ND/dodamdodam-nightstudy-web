import { UseQueryOptions, useQuery } from "react-query";
import memberRepository from "../../repositories/Member/member.repository";
import { MyMemberResponse } from "../../types/Member/member.type";
import { AxiosError } from "axios";
export const useGetMyMember = (
  options?: UseQueryOptions<
    MyMemberResponse,
    AxiosError,
    MyMemberResponse,
    "members/my"
  >
) =>
  useQuery("members/my", () => memberRepository.getMyMember(), {
    ...options,
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });
