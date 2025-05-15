import * as S from "./style";
import { ChangeEvent, KeyboardEventHandler } from "react";
import { DodamCheckBox } from "@b1nd/dds-web";
import { Place } from "types/Place/place.type";
import { nightStudyProjectRoom } from "types/Apply/apply.type";
import { ApplyNightStudyParam, ApplyProjectNightStudyParam } from "repositories/NightStudy/nightstudy.param";
import { ProjectRoom } from "types/NightStudy/nightstudy.type";

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
  isRoomAvailable?: (roomName: nightStudyProjectRoom) => boolean;
  projectRooms?: ProjectRoom[];
}

const StudyInfo = ({
  applyNightStudyData,
  placeData,
  handleChangePlace,
  handleChangeContent,
  handleKeyDown,
  isPersonalPage,
  checkApplyNightStudy,
  isRoomAvailable,
  projectRooms
}: Props) => {
  const getRoomPeriod = (roomName: nightStudyProjectRoom): string | null => {
    if (!projectRooms || !roomName) return null;
    
    const room = projectRooms.find(r => r.room === roomName);
    if (!room) return null;
    
    const formatDate = (dateStr: string): string => {
      const date = new Date(dateStr);
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${month}/${day}`;
    };
    
    const startDate = formatDate(room.startAt);
    const endDate = formatDate(room.endAt);
    
    return `${startDate} ~ ${endDate}`;
  };

  return (
    <S.Container>
      <S.Title>{!isPersonalPage ? "프로젝트 진행 정보" : "학습 정보"}</S.Title>
      <S.InfoWrap>
        {/* {!isPersonalPage &&
        <S.StudyPlace>
          <p>학습 장소</p>
          <S.ContentDescription>한곳만 선택해주세요.</S.ContentDescription>
          <S.PlaceWrap>
            {placeData.map((item) => {
              const isAvailable = isRoomAvailable ? isRoomAvailable(item.name) : true;
              const roomPeriod = getRoomPeriod(item.name);
              
              return (
                <S.Place key={item.id}>
                  <DodamCheckBox
                    isDisabled={item.isAtv}
                    onClick={() => handleChangePlace("place", item.name)}
                  />
                  <S.PlaceInfo>
                    <p>{item.title}</p>
                    {isRoomAvailable && (
                      isAvailable ? (
                        <S.RoomAvailability $isAvailable={true}>
                          사용 신청 가능
                        </S.RoomAvailability>
                      ) : (
                        <S.RoomUnavailablePeriod>
                          {roomPeriod}
                        </S.RoomUnavailablePeriod>
                      )
                    )}
                  </S.PlaceInfo>
                </S.Place>
              );
            })}
          </S.PlaceWrap>
        </S.StudyPlace>
        } */}
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
              $height="200px"
            />
          </S.StudyContent>
        </S.StudyContentContainer>
      </S.InfoWrap>
    </S.Container>
  );
};

export default StudyInfo;