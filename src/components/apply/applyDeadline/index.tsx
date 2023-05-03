import React from "react";
import ApplyTitle from "../../common/apply/applyTitle";
import { ApplyDaedlineContainer } from "./style";
import ApplyBox from "../../common/apply/applyBox";
import ApplyLargeText from "../../common/apply/applyText";

const ApplyDeadline = () => {
  return (
    <ApplyDaedlineContainer>
      <ApplyTitle>신청기한</ApplyTitle>
      <ApplyBox size="small">
        <ApplyLargeText>시작일</ApplyLargeText>
      </ApplyBox>
    </ApplyDaedlineContainer>
  );
};

export default ApplyDeadline;
