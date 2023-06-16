import { UseQueryOptions, useMutation, useQuery } from "react-query";
import applyRepository from "../../repositories/Apply/apply.repository";
import { LateNightResponse } from "../../types/LateNight/LateNight.type";
import { AxiosError } from "axios";
import { DeleteByIdParam } from "../../repositories/Apply/apply.param";
export const useGetMyLateNights = (
  options?: UseQueryOptions<
    LateNightResponse,
    AxiosError,
    LateNightResponse,
    "myLateNight/getMyLateNight"
  >
) =>
  useQuery("myLateNight/getMyLateNight", () => applyRepository.MyLateNights(), {
    ...options,
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });

export const useDeleteMyLateNightsQuery = () => {
  const mutation = useMutation(({ id }: DeleteByIdParam) =>
    applyRepository.DeleteLatenight({ id })
  );
  return mutation;
};
