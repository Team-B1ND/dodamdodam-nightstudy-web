import { UseQueryOptions, useQuery } from "react-query";
import applyRepository from "../../repositories/Apply/apply.repository";
import { LateNightResponse } from "../../types/LateNight/LateNight.type";
import { AxiosError } from "axios";

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
