import ApplyTitle from "../../common/apply/applyTitle";
import {
  ApplyDaedlineContainer,
  ApplyDeadlineBox,
  ApplyDeadlineFlex,
  ApplyDeadlineInput,
} from "./style";
import ApplyBox from "../../common/apply/applyBox";
import ApplyLargeText from "../../common/apply/applyText";
import ApplyRequireText from "../../common/apply/applyRequireText";
import { ChangeEvent } from "react";
import { Apply } from "../../../types/apply/apply.type";

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
      <ApplyBox
        size="small"
        style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}
      >
        <ApplyDeadlineBox>
          <ApplyDeadlineFlex>
            <ApplyRequireText>*</ApplyRequireText>
            <ApplyLargeText>시작일</ApplyLargeText>
            <ApplyRequireText>
              *지나가지 않은 날짜를 선택해주세요
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
      </ApplyBox>
    </ApplyDaedlineContainer>
  );
};

export default ApplyDeadline;
