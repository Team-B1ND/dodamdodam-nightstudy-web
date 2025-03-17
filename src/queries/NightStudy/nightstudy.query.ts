import { UseQueryOptions, useMutation, useQuery } from "react-query";
import { NightStudyResponse } from "../../types/NightStudy/nightstudy.type";
import { AxiosError } from "axios";
import nightstudyRepository from "../../repositories/NightStudy/nightstudy.repository";
import { ApplyNightStudyPram } from "../../repositories/NightStudy/nightstudy.param";

export const useGetMyNightStudyQuery = (
  options?: UseQueryOptions<
    NightStudyResponse,
    AxiosError,
    NightStudyResponse,
    "night-study/my"
  >
) =>
  useQuery("night-study/my", () => nightstudyRepository.getMyNightStudys(), {
    ...options,
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });

export const useApplyNightStudyMutation = () => {
  const mutation = useMutation((params: ApplyNightStudyPram) =>
    nightstudyRepository.applyNightStudy(params)
  );
  return mutation;
};

export const useDeleteMyNightStudyMutation = () => {
  const mutation = useMutation((id: number) =>
    nightstudyRepository.deleteNightStudy(id)
  );
  return mutation;
};
