import { Suspense, useState } from "react";
import ApplyPeriod from "../ApplyPeriod";
import { useApplyNightStudy } from "hooks/NightStudy/useApplyNightStudy";
import * as S from "./style";
import { DodamDivider, DodamErrorBoundary, DodamFilledButton, PageIndicator } from "@b1nd/dds-web";
import StudyInfo from "../StudyInfo";
import NightStudyStudentFallback from "../Fallback/NightStudyStudentFallback";
import SelectProjectMember from "../SelectProjectMember";
import { ApplyProjectNightStudyParam } from "repositories/NightStudy/nightstudy.param";


const ProjcetNightStudy = ({ isPersonalPage }: { isPersonalPage: boolean }) => {
  const { ...applyNightStudy } = useApplyNightStudy(isPersonalPage);

  
  return (
    <>
      <PageIndicator 
        customStyle={{padding:"12px 12px 0"}}
        buttonSize="Large"
        caseBy={{
          Page1:
          <S.ApplyInfoContainer>
            <S.ApplyInfo>
              <ApplyPeriod
                applyNightStudyData={applyNightStudy.applyNightStudyData}
                handleChangeDate={applyNightStudy.handleChangeDate}
                isPersonalPage={isPersonalPage}
                checkApplyNightStudy={applyNightStudy.checkApplyNightStudy}
                handleProjectType={applyNightStudy.handleProjectType}
                
              />
            </S.ApplyInfo>
            <DodamDivider type="Small" />
            <StudyInfo
              applyNightStudyData={applyNightStudy.applyNightStudyData}
              placeData={applyNightStudy.placeData}
              handleChangePlace={applyNightStudy.handleChangeCheckBox}
              handleChangeContent={applyNightStudy.handleChangeTextArea}
              handleKeyDown={applyNightStudy.handleKeyDown}
              isPersonalPage={isPersonalPage}
              checkApplyNightStudy={applyNightStudy.checkApplyNightStudy}
            />
          </S.ApplyInfoContainer>,
          Page2:
          <S.Page2Container>
            <DodamErrorBoundary text="학생을 불러오지 못했습니다!" showButton={true}>
              <Suspense fallback={<NightStudyStudentFallback />}>
                <SelectProjectMember
                  applyNightStudyData={applyNightStudy.applyNightStudyData as ApplyProjectNightStudyParam}
                  handleProjectMember={applyNightStudy.handleProjectMember}
                />
              </Suspense>
            </DodamErrorBoundary>
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
          </S.Page2Container>,
        }}
      />
    </>
  );
};

export default ProjcetNightStudy;
