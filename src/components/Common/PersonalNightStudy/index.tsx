import { useApplyNightStudy } from "hooks/NightStudy/useApplyNightStudy";
import ApplyPeriod from "../ApplyPeriod";
import PhoneRequire from "../PhoneRequire";
import * as S from "./style";
import StudyInfo from "../StudyInfo";
import { DodamDivider, DodamFilledButton } from "@b1nd/dds-web";
import { ApplyNightStudyParam } from "repositories/NightStudy/nightstudy.param";
import PeriodSlider from "../PeriodSlider";

const PersonalNightStudy = ({ isPersonalPage }: { isPersonalPage: boolean }) => {
  const { ...applyNightStudy } = useApplyNightStudy(isPersonalPage);

  return (
    <>
      <S.ApplyInfoContainer>
        <PeriodSlider handlePersonalType={applyNightStudy.handlePersonalType}/>
        <DodamDivider type="Small" />
        <S.ApplyInfo>
          <ApplyPeriod
            applyNightStudyData={applyNightStudy.applyNightStudyData}
            handleChangeDate={applyNightStudy.handleChangeDate}
            isPersonalPage={isPersonalPage}
            checkApplyNightStudy={applyNightStudy.checkApplyNightStudy}
            handleProjectType={applyNightStudy.handleProjectType}
          />
          <S.InfoContainer>
            <PhoneRequire
              applyNightStudyData={
                applyNightStudy.applyNightStudyData as ApplyNightStudyParam
              }
              handleChangeNeedPhone={applyNightStudy.handleChangeCheckBox}
              handleChangeReasonForPhone={applyNightStudy.handleChangeTextArea}
            />
          </S.InfoContainer>
        </S.ApplyInfo>
        <DodamDivider type="Small" />
        <StudyInfo
          applyNightStudyData={applyNightStudy.applyNightStudyData}
          handleChangeContent={applyNightStudy.handleChangeTextArea}
          handleKeyDown={applyNightStudy.handleKeyDown}
          isPersonalPage={isPersonalPage}
          checkApplyNightStudy={applyNightStudy.checkApplyNightStudy}
        />
      </S.ApplyInfoContainer>
      <S.ButtonWrap>
        <DodamFilledButton
          size="Large"
          text="제출"
          width={107}
          enabled={true}
          textTheme="staticWhite"
          typography={["Body1", "Bold"]}
          onClick={applyNightStudy.handleSubmitNightStudy}
        />
      </S.ButtonWrap>
    </>
  );
};

export default PersonalNightStudy;
