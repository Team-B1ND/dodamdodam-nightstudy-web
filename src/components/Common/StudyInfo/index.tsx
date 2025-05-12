import * as S from "./style";
import { ChangeEvent, KeyboardEventHandler } from "react";
import { DodamCheckBox } from "@b1nd/dds-web";
import { Place } from "types/Place/place.type";
import { nightStudyProjectRoom } from "types/Apply/apply.type";
import { ApplyNightStudyParam, ApplyProjectNightStudyParam } from "repositories/NightStudy/nightstudy.param";

interface Props {
  placeData: Place[];
  applyNightStudyData: ApplyNightStudyParam | ApplyProjectNightStudyParam;
  handleChangePlace: (type: "place" | "doNeedPhone", placeName: nightStudyProjectRoom) => void;
  handleChangeContent: (
    e: ChangeEvent<HTMLTextAreaElement>,
    type: "content" | "reasonForPhone" | "description" | "name"
  ) => void;
  handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement>;
  isPersonalPage: boolean;
  checkApplyNightStudy: (props: ApplyNightStudyParam | ApplyProjectNightStudyParam) => props is ApplyNightStudyParam;
}

const StudyInfo = ({
  applyNightStudyData,
  placeData,
  handleChangePlace,
  handleChangeContent,
  handleKeyDown,
  isPersonalPage,
  checkApplyNightStudy
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
                <p>{item.title}</p>
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
              onChange={(e) => handleChangeContent(e, "name")}
              value={(applyNightStudyData as ApplyProjectNightStudyParam).name}
              onKeyDown={handleKeyDown}
              $height="48px"
            />
          </S.StudyContent>
          }
          <S.StudyContent>
            <p>{isPersonalPage ? "학습 내용" : "프로젝트 개요"}</p>
            <S.ContentDescription>10 ~ 250 이내로 작성해주세요.</S.ContentDescription>
            <S.StudyContentTextArea
              placeholder="학습 내용을 입력해주세요."
              onChange={(e) => handleChangeContent(e, isPersonalPage ? "content" : "description")}
              value={
                checkApplyNightStudy(applyNightStudyData)
                ? applyNightStudyData.content
                : applyNightStudyData.description
              }
              onKeyDown={handleKeyDown}
              $height="210px"
            />
          </S.StudyContent>
        </S.StudyContentContainer>
      </S.InfoWrap>
    </S.Container>
  );
};

export default StudyInfo;
