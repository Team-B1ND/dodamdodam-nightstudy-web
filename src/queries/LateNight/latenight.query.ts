import { UseQueryOptions, useMutation, useQuery } from "react-query";
import applyRepository from "../../repositories/LateNight/latenight.repository";
import { LateNightResponse } from "../../types/LateNight/LateNight.type";
import { AxiosError } from "axios";
import {
  ApplyLateNightPram,
  DeleteLateNightByIdParam,
} from "../../repositories/LateNight/latenight.param";

export const useGetMyLateNightsQuery = (
  options?: UseQueryOptions<
    LateNightResponse,
    AxiosError,
    LateNightResponse,
    "/night-study/my"
  >
) =>
  useQuery("/night-study/my", () => applyRepository.getMyLateNights(), {
    ...options,
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });

export const useDeleteMyLateNightsQuery = () => {
  const mutation = useMutation(({ id }: DeleteLateNightByIdParam) =>
    applyRepository.deleteLatenight({ id })
  );
  return mutation;
};

export const useApplyLatenightMutation = () => {
  const mutation = useMutation(
    ({
      content,
      endAt,
      doNeedPhone,
      place,
      reasonForPhone,
      startAt,
    }: ApplyLateNightPram) =>
      applyRepository.applyLatenight({
        content,
        endAt,
        doNeedPhone,
        place,
        reasonForPhone,
        startAt,
      })
  );
  return mutation;
};
