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
    "myLateNight/getMyLateNight"
  >
) =>
  useQuery(
    "myLateNight/getMyLateNight",
    () => applyRepository.getMyLateNights(),
    {
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

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
      isPhone,
      placeId,
      reason,
      startAt,
    }: ApplyLateNightPram) =>
      applyRepository.applyLatenight({
        content,
        endAt,
        isPhone,
        placeId,
        reason,
        startAt,
      })
  );
  return mutation;
};
