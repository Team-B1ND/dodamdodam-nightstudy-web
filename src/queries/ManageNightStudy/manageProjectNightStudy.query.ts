import { AxiosError } from "axios";
import { QUERY_KEYS } from "queries/queryKey";
import { useMutation, useQuery, UseQueryOptions } from "react-query";
import manageProjcetNightStudyRepository from "repositories/ManageNightStudy/manageProjcetNightStudy.repository";
import { ProjectNightStudyResponse, ProjectUsingRoomResonse } from "types/ManageNightStudy/manageProjectNightStudy.type";

export const useGetAllowedProjectQuery = (
  options?: UseQueryOptions<
    ProjectNightStudyResponse,
    AxiosError,
    ProjectNightStudyResponse,
    string
  >
) =>
  useQuery(
    QUERY_KEYS.manageNightStudy.getAllowedProjectNightStudy,
    () => manageProjcetNightStudyRepository.getAllowedProjects(),
    {
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const useGetPendingProjectQuery = (
  options?: UseQueryOptions<
    ProjectNightStudyResponse,
    AxiosError,
    ProjectNightStudyResponse,
    string
  >
) =>
  useQuery(
    QUERY_KEYS.manageNightStudy.getPendingProjectNightStudy,
    () => manageProjcetNightStudyRepository.getPendingProjects(),
    {
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );


// 프젝 심자 승인
export const useAllowProjectMutation = () => {
  const mutation = useMutation(({id, room}: {id:number, room:string}) =>
    manageProjcetNightStudyRepository.allowProject(id, room)
  );
  return mutation;
};

// 프젝 심자 대기 전환
export const useRevertProjectMutation = () => {
  const mutation = useMutation((id: number) =>
    manageProjcetNightStudyRepository.revertProject(id)
  );
  return mutation;
};

// 프젝 심자 거절
export const useRejectProjectMutation = () => {
  const mutation = useMutation(({id, rejectReason}: {id: number, rejectReason: string}) =>
    manageProjcetNightStudyRepository.rejectProject(id, rejectReason)
  );
  return mutation;
};

// 사용중인 실 가져오기
export const useGetProjectUsingLab = (
  options?: UseQueryOptions<
    ProjectUsingRoomResonse,
    AxiosError,
    ProjectUsingRoomResonse,
    string
  >
) =>
  useQuery(
    QUERY_KEYS.manageNightStudy.getProjcetUsingRoom,
    () => manageProjcetNightStudyRepository.getProjectUsingLab(),
    {
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );