import ApplyTitle from "../../Common/Apply/applyTitle";
import {
  ApplyDaedlineContainer,
  ApplyDeadlineBox,
  ApplyDeadlineFlex,
  ApplyDeadlineInput,
} from "./style";
import ApplyLargeText from "../../Common/Apply/ApplyText";
import ApplyRequireText from "../../Common/RequireText";
import { ChangeEvent } from "react";
import { Apply } from "../../../types/Apply/apply.type";
import Box from "../../Common/Apply/ApplyBox";

interface Props {
  minDate: string;
  maxDate: string;
  postData: Apply;
  onChangeEndDate: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeStartDate: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ApplyDeadline = ({
  maxDate,
  minDate,
  onChangeEndDate,
  onChangeStartDate,
  postData,
}: Props) => {
  return (
    <ApplyDaedlineContainer>
      <ApplyTitle>신청기한</ApplyTitle>
      <Box
        size="small"
        style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}
      >
        <ApplyDeadlineBox>
          <ApplyDeadlineFlex>
            <ApplyRequireText>*</ApplyRequireText>
            <ApplyLargeText>시작일</ApplyLargeText>
            <ApplyRequireText>
              *현 시각 이후 날짜를 선택해주세요.
            </ApplyRequireText>
          </ApplyDeadlineFlex>
          <ApplyDeadlineInput
            type="date"
            name="startAt"
            value={postData.startAt}
            min={minDate}
            onChange={onChangeStartDate}
          />
        </ApplyDeadlineBox>
        <ApplyDeadlineBox>
          <ApplyDeadlineFlex style={{ marginTop: "10px" }}>
            <ApplyRequireText>*</ApplyRequireText>
            <ApplyLargeText>종료일</ApplyLargeText>
            <ApplyRequireText>
              *2차 심자 신청 기한은 최대 2주입니다.
            </ApplyRequireText>
          </ApplyDeadlineFlex>
          <ApplyDeadlineInput
            type="date"
            name="endAt"
            value={postData.endAt}
            max={maxDate}
            onChange={onChangeEndDate}
          />
        </ApplyDeadlineBox>
      </Box>
    </ApplyDaedlineContainer>
  );
};

export default ApplyDeadline;
