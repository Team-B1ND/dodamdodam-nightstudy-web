import { UseQueryOptions, useQuery } from "react-query";
import memberRepository from "../../repositories/Member/member.repository";
import { MyMemberResponse } from "../../types/Member/member.type";
import { AxiosError } from "axios";
import { QUERY_KEYS } from "../queryKey";

export const useGetMyMember = (
  options?: UseQueryOptions<
    MyMemberResponse,
    AxiosError,
    MyMemberResponse,
    string
  >
) =>
  useQuery(
    QUERY_KEYS.member.getMyMember,
    () => memberRepository.getMyMember(),
    {
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );
