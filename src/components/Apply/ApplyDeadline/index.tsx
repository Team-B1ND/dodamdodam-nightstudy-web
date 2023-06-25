import ApplyTitle from "../../Common/Apply/ApplyTitle";
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
            <ApplyLargeText htmlFor="startDate">시작일</ApplyLargeText>
            <ApplyRequireText htmlFor="startDate">
              *현 시각 이후 날짜를 선택해주세요.
            </ApplyRequireText>
          </ApplyDeadlineFlex>
          <ApplyDeadlineInput
            id="startDate"
            type="date"
            placeholder={
              postData.startAt ? postData.startAt : "시작일을 선택해주세요"
            }
            name="startAt"
            value={postData.startAt}
            min={minDate}
            onChange={onChangeStartDate}
            placeholderColor={postData.startAt}
          />
        </ApplyDeadlineBox>
        <ApplyDeadlineBox>
          <ApplyDeadlineFlex style={{ marginTop: "10px" }}>
            <ApplyRequireText>*</ApplyRequireText>
            <ApplyLargeText htmlFor="endDate">종료일</ApplyLargeText>
            <ApplyRequireText htmlFor="endDate">
              *2차 심자 신청 기한은 최대 2주입니다.
            </ApplyRequireText>
          </ApplyDeadlineFlex>
          <ApplyDeadlineInput
            id="endDate"
            type="date"
            placeholder={
              postData.endAt ? postData.endAt : "종료일을 선택해주세요"
            }
            name="endAt"
            value={postData.endAt}
            max={maxDate}
            onChange={onChangeEndDate}
            placeholderColor={postData.endAt}
          />
        </ApplyDeadlineBox>
      </Box>
    </ApplyDaedlineContainer>
  );
};

export default ApplyDeadline;
