import * as S from "./style";
import { ChangeEvent, KeyboardEventHandler } from "react";
import { DodamCheckBox, DodamFilledButton } from "@b1nd/dds-web";
import { Place } from "types/Place/place.type";

interface Props {
  enabled: boolean;
  placeData: Place[];
  handleChangePlace: (type: "place" | "doNeedPhone", placeName: string) => void;
  handleChangeContent: (
    e: ChangeEvent<HTMLTextAreaElement>,
    type: "content" | "reasonForPhone"
  ) => void;
  handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement>;
  handleSubmitNightStudy: () => void;
}

const StudyInfo = ({
  enabled,
  placeData,
  handleChangePlace,
  handleChangeContent,
  handleKeyDown,
  handleSubmitNightStudy,
}: Props) => {
  return (
    <S.Container>
      <S.Title>학습 정보</S.Title>
      <S.InfoWrap>
        <S.StudyPlace>
          <S.ContentTitle>학습 장소</S.ContentTitle>
          <S.ContentDescription>한곳만 선택해주세요.</S.ContentDescription>
          <S.PlaceWrap>
            {placeData.map((item) => (
              <S.Place key={item.id}>
                <S.PlaceName>{item.name}</S.PlaceName>
                <DodamCheckBox
                  isDisabled={item.isAtv}
                  onClick={() => handleChangePlace("place", item.name)}
                />
              </S.Place>
            ))}
          </S.PlaceWrap>
        </S.StudyPlace>
        <S.StudyContent>
          <S.ContentTitle>학습 내용</S.ContentTitle>
          <S.ContentDescription>
            10 ~ 250 이내로 작성해주세요.
          </S.ContentDescription>
          <S.StudyContentTextArea
            placeholder="학습 내용을 입력해주세요."
            onChange={(e) => handleChangeContent(e, "content")}
            onKeyDown={handleKeyDown}></S.StudyContentTextArea>
        </S.StudyContent>
      </S.InfoWrap>
      <S.ButtonWrap>
        <DodamFilledButton
          size="Large"
          text="제출"
          width={107}
          enabled={enabled}
          textTheme="staticWhite"
          typography={["Body1", "Bold"]}
          onClick={handleSubmitNightStudy}
        />
      </S.ButtonWrap>
    </S.Container>
  );
};

export default StudyInfo;
