import { ChangeEvent } from "react";
import * as S from "../style";
import { STUDYROOM_ITEMS } from "./constant";

interface Props {
  checkOnlyOne: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ApplyPlaceItem = ({ checkOnlyOne }: Props) => {
  return (
    <S.ApplyPlaceNameBox>
      {STUDYROOM_ITEMS.map((studyroom, idx) => (
        <S.ApplyStudyRoomBox key={idx}>
          <S.ApplyPlaceCheckBox
            id="place"
            name="place"
            type="checkbox"
            onChange={checkOnlyOne}
            value={studyroom}
          />
          <S.ApplyPlaceName>{studyroom}</S.ApplyPlaceName>
        </S.ApplyStudyRoomBox>
      ))}
    </S.ApplyPlaceNameBox>
  );
};

export default ApplyPlaceItem;
