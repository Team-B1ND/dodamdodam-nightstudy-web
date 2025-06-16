import { AxiosError } from "axios";
import { QUERY_KEYS } from "queries/queryKey";
import { useMutation, useQuery, UseQueryOptions } from "react-query";
import { NightStudyBanParams } from "repositories/ManageNightStudy/manageNightStudy.param";
import manageNightStudyRepository from "repositories/ManageNightStudy/manageNightStudy.repository";
import { NightStudyBanResponse } from "types/ManageNightStudy/manageNightStudy.type";
import { NightStudyResponse } from "types/NightStudy/nightstudy.type";

export const useGetAllowedNightStudyQuery = (
  options?: UseQueryOptions<
    NightStudyResponse,
    AxiosError,
    NightStudyResponse,
    string
  >
) =>
  useQuery(
    QUERY_KEYS.manageNightStudy.getAllowedNightStudy,
    () => manageNightStudyRepository.getAllowedStudys(),
    {
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const useGetPendingNightStudyQuery = (
  options?: UseQueryOptions<
    NightStudyResponse,
    AxiosError,
    NightStudyResponse,
    string
  >
) =>
  useQuery(
    QUERY_KEYS.manageNightStudy.getPendingNightStudy,
    () => manageNightStudyRepository.getPendingStudys(),
    {
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

// 심자 승인
export const useAllowNightStudyMutation = () => {
  const mutation = useMutation((id: number) =>
    manageNightStudyRepository.allowNightStudy(id)
  );
  return mutation;
};

// 심자 대기 전환
export const useRevertNightStudyMutation = () => {
  const mutation = useMutation((id: number) =>
    manageNightStudyRepository.revertNightStudy(id)
  );
  return mutation;
};

// 심자 거절
export const useRejectNightStudyMutation = () => {
  const mutation = useMutation((id: number) =>
    manageNightStudyRepository.rejectNightStudy(id)
  );
  return mutation;
};

// 학생 심자 밴 가져오기
export const useGetBanMemberQuery = (
  options?: UseQueryOptions<
    NightStudyBanResponse,
    AxiosError,
    NightStudyBanResponse,
    string
  >
) =>
  useQuery(
    QUERY_KEYS.manageNightStudy.getBanMember,
    () => manageNightStudyRepository.getBanMember(),
    {
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const useDeleteBanMutation = () => {
  const mutation = useMutation((id: number) =>
    manageNightStudyRepository.deleteNightStudyBan(id)
  );
  return mutation;
};

export const useCreateBanMutation = () => {
  const mutation = useMutation((params: NightStudyBanParams) =>
    manageNightStudyRepository.createNightStudyBan(params)
  );
  return mutation;
};