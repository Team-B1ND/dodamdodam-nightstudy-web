import * as S from "./style";
import { DodamDivider, DodamErrorBoundary, DodamSegmentedButton } from "@b1nd/dds-web";
import ApplyPeriod from "components/Common/ApplyPeriod";
import PhoneRequire from "components/Common/PhoneRequire";
import SelectProjectMember from "components/Common/SelectProjectMember";
import StudyInfo from "components/Common/StudyInfo";
import { useApplyNightStudy } from "hooks/NightStudy/useApplyNightStudy";
import { Suspense, useState } from "react";
import { ApplyNightStudyPram, ApplyProjectNightStudyPram } from "repositories/NightStudy/nightstudy.param";

const Main = () => {
  const [ isPersonalPage, setIsPersonalPage ] = useState(true);
  const { ...applyNightStudy } = useApplyNightStudy(isPersonalPage);

  return (
    <S.Container>
      <S.Wrap>
        <DodamSegmentedButton
          num={2}
          type="block"
          data={[
            { text: '개인', isAtv: isPersonalPage },
            { text: '프로젝트', isAtv: !isPersonalPage }
          ]}
          width={240}
          height={48}
          onClick={() => setIsPersonalPage((prev) => !prev)}
        />
        <S.ApplyInfo>
          <ApplyPeriod
            applyNightStudyData={applyNightStudy.applyNightStudyData}
            handleChangeDate={applyNightStudy.handleChangeDate}
            isPersonalPage={isPersonalPage}
            checkApplyNightStudy={applyNightStudy.checkApplyNightStudy}
            handleProjectType={applyNightStudy.handleProjectType}
          />
          {isPersonalPage &&
            <PhoneRequire
              applyNightStudyData={applyNightStudy.applyNightStudyData as ApplyNightStudyPram}
              handleChangeNeedPhone={applyNightStudy.handleChangeCheckBox}
              handleChangeReasonForPhone={applyNightStudy.handleChangeTextArea}
            />
          }
        </S.ApplyInfo>
        <DodamDivider type="Small" />
        <StudyInfo
          enabled={applyNightStudy.enabled}
          placeData={applyNightStudy.placeData}
          handleChangePlace={applyNightStudy.handleChangeCheckBox}
          handleChangeContent={applyNightStudy.handleChangeTextArea}
          handleKeyDown={applyNightStudy.handleKeyDown}
          handleSubmitNightStudy={applyNightStudy.handleSubmitNightStudy}
          isPersonalPage={isPersonalPage}
        />
        <DodamErrorBoundary text="학생을 불러오지 못했습니다!" showButton={true}>
          <Suspense>
            <SelectProjectMember
              applyNightStudyData={applyNightStudy.applyNightStudyData as ApplyProjectNightStudyPram}
              handleProjectMember={applyNightStudy.handleProjectMember}
            />
          </Suspense>
        </DodamErrorBoundary>
      </S.Wrap>
    </S.Container>
  );
};

export default Main;
