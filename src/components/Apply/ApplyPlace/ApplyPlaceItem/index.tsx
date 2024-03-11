import { ChangeEvent } from "react";
import {
  ApplyPlaceCheckBox,
  ApplyPlaceName,
  ApplyPlaceNameBox,
  ApplyStudyRoomBox,
} from "../style";
import { useGetPlaceQuery } from "../../../../queries/Place/place.query";

interface Props {
  checkOnlyOne: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ApplyPlaceItem = ({ checkOnlyOne }: Props) => {
  const { data } = useGetPlaceQuery({ suspense: true });
  return (
    <ApplyPlaceNameBox>
      {data?.data.map((item) => {
        return (
          <>
            <ApplyStudyRoomBox key={item.name}>
              <ApplyPlaceCheckBox
                id="place"
                name="place"
                type="checkbox"
                onChange={checkOnlyOne}
                value={item.name}
              />
              <ApplyPlaceName>{item.name}</ApplyPlaceName>
            </ApplyStudyRoomBox>
          </>
        );
      })}
    </ApplyPlaceNameBox>
  );
};

export default ApplyPlaceItem;
