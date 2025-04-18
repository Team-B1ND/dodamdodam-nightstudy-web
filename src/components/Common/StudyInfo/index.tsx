import * as S from "./style";
import { ChangeEvent, KeyboardEventHandler } from "react";
import { DodamCheckBox, DodamFilledButton } from "@b1nd/dds-web";
import { Place } from "types/Place/place.type";
import { nightStudyProjectRoom } from "types/Apply/apply.type";

interface Props {
  enabled: boolean;
  placeData: Place[];
  handleChangePlace: (type: "place" | "doNeedPhone", placeName: nightStudyProjectRoom) => void;
  handleChangeContent: (
    e: ChangeEvent<HTMLTextAreaElement>,
    type: "content" | "reasonForPhone" | "title"
  ) => void;
  handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement>;
  handleSubmitNightStudy: () => void;
  isPersonalPage: boolean
}

const StudyInfo = ({
  enabled,
  placeData,
  handleChangePlace,
  handleChangeContent,
  handleKeyDown,
  handleSubmitNightStudy,
  isPersonalPage
}: Props) => {
  return (
    <S.Container>
      <S.Title>{!isPersonalPage ? "프로젝트 진행 정보" : "학습 정보"}</S.Title>
      <S.InfoWrap>
        {!isPersonalPage &&
        <S.StudyPlace>
          <p>학습 장소</p>
          <S.ContentDescription>한곳만 선택해주세요.</S.ContentDescription>
          <S.PlaceWrap>
            {placeData.map((item) => (
              <S.Place key={item.id}>
                <DodamCheckBox
                  isDisabled={item.isAtv}
                  onClick={() => handleChangePlace("place", item.name)}
                />
                <p>{item.name}</p>
              </S.Place>
            ))}
          </S.PlaceWrap>
        </S.StudyPlace>
        }
        <S.StudyContentContainer>
          {!isPersonalPage &&
          <S.StudyContent>
            <p>프로젝트명</p>
            <S.ContentDescription>20자 이내로 작성해주세요.</S.ContentDescription>
            <S.StudyContentTextArea
              placeholder="프로젝트 이름을 입력해주세요."
              onChange={(e) => handleChangeContent(e, "title")}
              onKeyDown={handleKeyDown}
              $height="42px"
            />
          </S.StudyContent>
          }
          <S.StudyContent>
            <p>{isPersonalPage ? "학습 내용" : "프로젝트 개요"}</p>
            <S.ContentDescription>10 ~ 250 이내로 작성해주세요.</S.ContentDescription>
            <S.StudyContentTextArea
              placeholder="학습 내용을 입력해주세요."
              onChange={(e) => handleChangeContent(e, "content")}
              onKeyDown={handleKeyDown}
              $height="154px"
            />
          </S.StudyContent>
        </S.StudyContentContainer>
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
