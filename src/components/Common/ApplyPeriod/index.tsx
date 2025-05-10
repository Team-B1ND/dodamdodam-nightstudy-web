import * as S from "./style";
import { DodamDatePicker, DodamDivider } from "@b1nd/dds-web";
import { ApplyNightStudyParam, ApplyProjectNightStudyParam } from "repositories/NightStudy/nightstudy.param";
import { Select } from "../Select";

interface Props {
  applyNightStudyData: ApplyNightStudyParam | ApplyProjectNightStudyParam;
  handleChangeDate: (e: Date, scope: "start" | "end") => void;
  handleProjectType: (type : string) => void;
  isPersonalPage: boolean;
  checkApplyNightStudy: (props: ApplyNightStudyParam | ApplyProjectNightStudyParam) => props is ApplyNightStudyParam
}

const ApplyPeriod = ({ applyNightStudyData, handleChangeDate, handleProjectType, isPersonalPage, checkApplyNightStudy }: Props) => {
  return (
    <S.Container>
      <S.Wrap>
        <S.Box>
          <S.Title>신청 {!isPersonalPage ? "정보" : "기한"}</S.Title>
          <S.DateInfoWrap>
            {!isPersonalPage &&
            <S.DateInfoBox>
              <p>진행 시각</p>
              <Select items={["심자 1", "심자 2"]} value={
                !checkApplyNightStudy(applyNightStudyData) &&
                applyNightStudyData.type === "NIGHT_STUDY_PROJECT_1"
                ? "심자 1"
                : "심자 2"
                }
                onSelectedItemChange={handleProjectType}
                zIndex={2}
              />
            </S.DateInfoBox>
            }
            <S.DateInfoBox>
              <p>시작 날짜</p>
              <DodamDatePicker
                itemKey="startDate"
                title="시작 날짜"
                color="primaryNormal"
                type="entire"
                dateType="MonthDay"
                value={applyNightStudyData.startAt}
                customStyle={{ border: "none" }}
                onChange={(e: Date) => handleChangeDate(e, "start")}
              />
            </S.DateInfoBox>
            <S.DateInfoBox>
              <p>종료 날짜</p>
              <DodamDatePicker
                itemKey="endDate"
                title="종료 날짜"
                color="primaryNormal"
                type="entire"
                dateType="MonthDay"
                value={applyNightStudyData.endAt}
                customStyle={{ border: "none" }}
                onChange={(e: Date) => handleChangeDate(e, "end")}
              />
            </S.DateInfoBox>
          </S.DateInfoWrap>
        </S.Box>
      </S.Wrap>
      <DodamDivider type="Small" />
    </S.Container>
  );
};

export default ApplyPeriod;
