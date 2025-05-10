import * as S from "./style";
import { DodamDivider, DodamErrorBoundary, DodamFilledButton, DodamSegmentedButton } from "@b1nd/dds-web";
import ApplyPeriod from "components/Common/ApplyPeriod";
import NightStudyStudentFallback from "components/Common/Fallback/NightStudyStudentFallback";
import PhoneRequire from "components/Common/PhoneRequire";
import SelectProjectMember from "components/Common/SelectProjectMember";
import StudyInfo from "components/Common/StudyInfo";
import { useApplyNightStudy } from "hooks/NightStudy/useApplyNightStudy";
import { SetStateAction, Suspense, useState } from "react";
import { ApplyNightStudyParam, ApplyProjectNightStudyParam } from "repositories/NightStudy/nightstudy.param";

interface Props {
  isPersonalPage: boolean;
  setIsPersonalPage: React.Dispatch<SetStateAction<boolean>>
}

const Main = ({ isPersonalPage, setIsPersonalPage }: Props) => {
  const [ projectNightStudyPage, setProjectNightStudyPage ] = useState(0);
  const { ...applyNightStudy } = useApplyNightStudy(isPersonalPage);

  const handleProjectNightStudyPage = () => {
    setProjectNightStudyPage((prev) => (prev - 1)**2)
  }
  
  return (
    <S.Container>
      <S.Wrap >
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
        {(isPersonalPage || projectNightStudyPage === 0) &&
          <S.ApplyInfoContainer>
            <S.ApplyInfo>
              <ApplyPeriod
                applyNightStudyData={applyNightStudy.applyNightStudyData}
                handleChangeDate={applyNightStudy.handleChangeDate}
                isPersonalPage={isPersonalPage}
                checkApplyNightStudy={applyNightStudy.checkApplyNightStudy}
                handleProjectType={applyNightStudy.handleProjectType}
              />
              {isPersonalPage &&
                <S.InfoContainer>
                  <PhoneRequire
                    applyNightStudyData={applyNightStudy.applyNightStudyData as ApplyNightStudyParam}
                    handleChangeNeedPhone={applyNightStudy.handleChangeCheckBox}
                    handleChangeReasonForPhone={applyNightStudy.handleChangeTextArea}
                  />
                  <DodamDivider type="Small"/>
                </S.InfoContainer>
              }
            </S.ApplyInfo>
            <DodamDivider type="Small"/>
            <StudyInfo
              applyNightStudyData={applyNightStudy.applyNightStudyData}
              placeData={applyNightStudy.placeData}
              handleChangePlace={applyNightStudy.handleChangeCheckBox}
              handleChangeContent={applyNightStudy.handleChangeTextArea}
              handleKeyDown={applyNightStudy.handleKeyDown}
              isPersonalPage={isPersonalPage}
              checkApplyNightStudy={applyNightStudy.checkApplyNightStudy}
            />
          </S.ApplyInfoContainer>
        }
        {!isPersonalPage && projectNightStudyPage === 1 &&
          <DodamErrorBoundary text="학생을 불러오지 못했습니다!" showButton={true}>
            <Suspense fallback={<NightStudyStudentFallback/>}>
              <SelectProjectMember
                applyNightStudyData={applyNightStudy.applyNightStudyData as ApplyProjectNightStudyParam}
                handleProjectMember={applyNightStudy.handleProjectMember}
              />
            </Suspense>
          </DodamErrorBoundary>
        }
        <S.ButtonWrap>
          {!isPersonalPage && projectNightStudyPage === 0
            ? <DodamFilledButton
                size="Large"
                text="다음"
                width={107}
                enabled={true}
                textTheme="staticWhite"
                typography={["Body1", "Bold"]}
                onClick={handleProjectNightStudyPage}
              />
            : <DodamFilledButton
                size="Large"
                text="제출"
                width={107}
                enabled={true}
                textTheme="staticWhite"
                typography={["Body1", "Bold"]}
                onClick={applyNightStudy.handleSubmitNightStudy}
              />
          }
        </S.ButtonWrap>
        {!isPersonalPage &&
          <S.Indicator>
            <S.IndicatorButton $focus={`${projectNightStudyPage === 0}`} onClick={handleProjectNightStudyPage}/>
            <S.IndicatorButton $focus={`${projectNightStudyPage === 1}`} onClick={handleProjectNightStudyPage}/>
          </S.Indicator>
        }
      </S.Wrap>
    </S.Container>
  );
};

export default Main;
