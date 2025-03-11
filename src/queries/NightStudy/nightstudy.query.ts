import { UseQueryOptions, useMutation, useQuery } from "react-query";
import { NightStudyResponse } from "../../types/NightStudy/nightstudy.type";
import { AxiosError } from "axios";
import nightstudyRepository from "../../repositories/NightStudy/nightstudy.repository";
import {
  ApplyNightStudyPram,
  DeleteNightStudyByIdParam,
} from "../../repositories/NightStudy/nightstudy.param";

export const useGetMyNightStudyQuery = (
  options?: UseQueryOptions<
    NightStudyResponse,
    AxiosError,
    NightStudyResponse,
    "/night-study/my"
  >
) =>
  useQuery("/night-study/my", () => nightstudyRepository.getMyNightStudys(), {
    ...options,
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });

export const useDeleteMyNightStudyMutation = () => {
  const mutation = useMutation(({ id }: DeleteNightStudyByIdParam) =>
    nightstudyRepository.deleteNightStudy({ id })
  );
  return mutation;
};

export const useApplyNightStudyMutation = () => {
  const mutation = useMutation(
    ({
      content,
      endAt,
      doNeedPhone,
      reasonForPhone,
      startAt,
    }: ApplyNightStudyPram) =>
      nightstudyRepository.applyNightStudy({
        content,
        endAt,
        doNeedPhone,
        reasonForPhone,
        startAt,
      })
  );
  return mutation;
};
