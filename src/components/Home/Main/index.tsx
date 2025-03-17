import * as S from "./style";
import ApplyPeriod from "../../Common/ApplyPeriod";
import PhoneRequire from "../../Common/PhoneRequire";
import StudyInfo from "../../Common/StudyInfo";
import { DodamDivider } from "@b1nd/dds-web";
import { useApplyNightStudy } from "../../../hooks/NightStudy/useApplyNightStudy";

const Main = () => {
  const { ...applyNightStudy } = useApplyNightStudy();

  return (
    <S.Container>
      <S.Wrap>
        <S.ApplyInfo>
          <ApplyPeriod
            applyNightStudyData={applyNightStudy.applyNightStudyData}
            handleChangeDate={applyNightStudy.handleChangeDate}
          />
          <PhoneRequire
            applyNightStudyData={applyNightStudy.applyNightStudyData}
            handleChangeNeedPhone={applyNightStudy.handleChangeCheckBox}
            handleChangeReasonForPhone={applyNightStudy.handleChangeTextArea}
          />
        </S.ApplyInfo>
        <DodamDivider type="Small" />
        <StudyInfo
          placeData={applyNightStudy.placeData}
          handleChangePlace={applyNightStudy.handleChangeCheckBox}
          handleChangeContent={applyNightStudy.handleChangeTextArea}
          handleSubmitNightStudy={applyNightStudy.handleSubmitNightStudy}
        />
      </S.Wrap>
    </S.Container>
  );
};

export default Main;
