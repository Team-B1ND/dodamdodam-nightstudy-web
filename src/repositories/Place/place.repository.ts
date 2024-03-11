import { customAxios } from "../../libs/Axios/customAxios";
import { PlacesResponse } from "../../types/Place/place.type";

class PlaceRepository {
  public async getPlace(): Promise<PlacesResponse> {
    const { data } = await customAxios.get("/place/dormitory");

    return data;
  }
}

export default new PlaceRepository();
