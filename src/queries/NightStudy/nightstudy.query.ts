import { UseQueryOptions, useMutation, useQuery } from "react-query";
import { BanDataResponse, NightStudyResponse, ProjectNightStudyResponse, ProjectRoom } from "types/NightStudy/nightstudy.type";
import { AxiosError } from "axios";
import nightstudyRepository from "repositories/NightStudy/nightstudy.repository";
import { ApplyNightStudyParam, ApplyProjectNightStudyParam } from "repositories/NightStudy/nightstudy.param";
import { QUERY_KEYS } from "../queryKey";

export const useGetMyNightStudyQuery = (
  options?: UseQueryOptions<
    NightStudyResponse,
    AxiosError,
    NightStudyResponse,
    string
  >
) =>
  useQuery(
    QUERY_KEYS.nightStudy.getMyNightStudy,
    () => nightstudyRepository.getMyNightStudys(),
    {
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const useGetMyProjectNightStudyQuery = (
  options?: UseQueryOptions<
    ProjectNightStudyResponse,
    AxiosError,
    ProjectNightStudyResponse,
    string
  >
) =>
  useQuery(
    QUERY_KEYS.nightStudy.getMyProjectNightStudy,
    () => nightstudyRepository.getMyProjectNightStudys(),
    {
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const useGetIsImBannedQuery = (
  options?: UseQueryOptions<
    BanDataResponse,
    AxiosError,
    BanDataResponse,
    string
  >
) =>
  useQuery(
    QUERY_KEYS.nightStudy.getIsImBanned,
    () => nightstudyRepository.getIsImBanned(),
    {
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

// 프로젝트 실 조회 쿼리 추가
export const useGetProjectRoomsQuery = (
  options?: UseQueryOptions<
    ProjectRoom[],
    AxiosError,
    ProjectRoom[],
    string
  >
) =>
  useQuery(
    QUERY_KEYS.nightStudy.getProjectRooms,
    () => nightstudyRepository.getProjectRooms(),
    {
      ...options,
      refetchOnWindowFocus: false,
      retry: 1,
    }
  );

export const useApplyNightStudyMutation = () => {
  const mutation = useMutation((params: ApplyNightStudyParam) =>
    nightstudyRepository.applyNightStudy(params)
  );
  return mutation;
};

export const useApplyProjectNightStudyMutation = () => {
  const mutation = useMutation((params: ApplyProjectNightStudyParam) => 
    nightstudyRepository.applyProjcetNightStudy(params)
  );
  return mutation
}