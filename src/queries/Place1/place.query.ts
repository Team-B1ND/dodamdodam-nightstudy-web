import { useQuery } from "react-query";
import placeRepository from "../../repositories/Place1/place.repository";

export const useGetPlaceQuery = () =>
  useQuery("place/getPlaceQuery", () => placeRepository.getPlace(), {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });
