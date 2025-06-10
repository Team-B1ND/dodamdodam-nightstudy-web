import * as S from './style';
import { Close } from "@b1nd/dds-web";
import { NIGHT_STUDY_TIME } from 'constants/NightStudy/nightStudy.constant';
import { ProjectNightStudy } from "types/ManageNightStudy/manageProjectNightStudy.type";
import { NightStudy } from 'types/NightStudy/nightstudy.type';

interface PersonalModalProps {
  data: NightStudy | ProjectNightStudy;
  close: () => void;
}

const DataViewModal = ({data, close}:PersonalModalProps) => {
  const isProjectData = (
    data: NightStudy | ProjectNightStudy
  ): data is ProjectNightStudy => {
    return "room" in data;
  }
  return (
    <S.PersonalModalContainer>
      <S.PersonalModalHeader>
        <p>
          {isProjectData(data)
            ? "프로젝트 심야 자습 정보"
            : "개인 심야 자습 정보"}
        </p>
        <button onClick={close}>
          <Close size={24} />
        </button>
      </S.PersonalModalHeader>
      <S.PersonalDataContainer>
        <S.PersonalItemContainer $size="BIG">
          <p>{isProjectData(data) ? "프로젝트" : "학생"}명</p>
          {isProjectData(data) ? data.name : data.student.name}
        </S.PersonalItemContainer>
        <S.PersonalItemContainer $size="SMALL">
          <p>진행 시간</p>
          {NIGHT_STUDY_TIME[data.type] + (isProjectData(data) ? "" : "까지")}
        </S.PersonalItemContainer>
        <S.PersonalItemContainer $size="SMALL">
          <p>시작일</p>
          {data.startAt}
        </S.PersonalItemContainer>
        <S.PersonalItemContainer $size="SMALL">
          <p>종료일</p>
          {data.endAt}
        </S.PersonalItemContainer>
      </S.PersonalDataContainer>
      {isProjectData(data) ? (
        <S.PersonalDataContainer>
          <S.PersonalItemContainer $size="SMALL">
            <p>프로젝트 인원</p>
            {data.participants?.map((item) => `${item.grade}${item.room}${item.number > 9 ? item.number : `0${item.number}`}${item.name}`)}
          </S.PersonalItemContainer>
        </S.PersonalDataContainer>
      ) : (
        <S.PersonalDataContainer>
          <S.PersonalItemContainer $size="SMALL">
            <p>휴대폰</p>
            {data.doNeedPhone ? "O" : "X"}
          </S.PersonalItemContainer>
          <S.PersonalItemContainer $size="SMALL">
            <p>휴대폰 사유</p>
            {data.reasonForPhone || "-"}
          </S.PersonalItemContainer>
        </S.PersonalDataContainer>
      )}
      <S.PersonalDataContainer>
        <S.PersonalItemContainer $size="SMALL">
          <p>{isProjectData(data) ? "프로젝트 설명" : "심자 사유"}</p>
          {isProjectData(data) ? data.description : data.content}
        </S.PersonalItemContainer>
      </S.PersonalDataContainer>
    </S.PersonalModalContainer>
  );
}

export default DataViewModal