import * as S from "./style";
import { DodamDivider } from "@b1nd/dds-web";
import ApplyPeriod from "src/components/Common/ApplyPeriod";
import PhoneRequire from "src/components/Common/PhoneRequire";
import StudyInfo from "src/components/Common/StudyInfo";
import { useApplyNightStudy } from "src/hooks/NightStudy/useApplyNightStudy";

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
          enabled={applyNightStudy.enabled}
          placeData={applyNightStudy.placeData}
          handleChangePlace={applyNightStudy.handleChangeCheckBox}
          handleChangeContent={applyNightStudy.handleChangeTextArea}
          handleKeyDown={applyNightStudy.handleKeyDown}
          handleSubmitNightStudy={applyNightStudy.handleSubmitNightStudy}
        />
      </S.Wrap>
    </S.Container>
  );
};

export default Main;
