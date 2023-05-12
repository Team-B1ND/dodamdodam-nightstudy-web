import { UseQueryOptions, UseQueryResult, useQuery } from "react-query";
import placeRepository from "../../repositories/Place/place.repository";
import { PlacesResponse } from "../../types/Place/place.type";
import { AxiosError } from "axios";

export const useGetPlaceQuery = (
  options?: UseQueryOptions<
    PlacesResponse,
    AxiosError,
    PlacesResponse,
    "place/getPlaceQuery"
  >
): UseQueryResult<PlacesResponse, AxiosError> =>
  useQuery("place/getPlaceQuery", () => placeRepository.getPlace(), {
    ...options,
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });
