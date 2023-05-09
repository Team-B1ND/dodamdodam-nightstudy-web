import customAxios from "../../libs/Axios1/customAxios";
import { PlacesResponse } from "../../types/Place1/place.type";

class PlaceRepository {
  public async getPlace(): Promise<PlacesResponse> {
    const { data } = await customAxios.get("/place/dormitory");
    return data;
  }
}

export default new PlaceRepository();
