import * as S from "./style";
import { DodamDatePicker, DodamDivider } from "@b1nd/dds-web";
import { ApplyNightStudyPram } from "src/repositories/NightStudy/nightstudy.param";

interface Props {
  applyNightStudyData: ApplyNightStudyPram;
  handleChangeDate: (e: Date, scope: "start" | "end") => void;
}

const ApplyPeriod = ({ applyNightStudyData, handleChangeDate }: Props) => {
  return (
    <S.Container>
      <S.Wrap>
        <S.Box>
          <S.Title>신청 기한</S.Title>
          <S.DateInfoWrap>
            <S.DateInfoBox>
              <S.DateInfoTitle>시작 날짜</S.DateInfoTitle>
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
              <S.DateInfoTitle>종료 날짜</S.DateInfoTitle>
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
