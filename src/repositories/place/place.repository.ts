import customAxios from "../../libs/axios/customAxios";
import { PlacesResponse } from "../../types/place/place.type";

class PlaceRepository {
  public async getPlace(): Promise<PlacesResponse> {
    const { data } = await customAxios.get("/place/dormitory");
    return data;
  }
}

export default new PlaceRepository();
