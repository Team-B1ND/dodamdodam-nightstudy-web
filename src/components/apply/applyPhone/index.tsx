import React from "react";
import ApplyTitle from "../../common/apply/applyTitle";
import { ApplyPhoneContainer } from "./style";
import ApplyBox from "../../common/apply/applyBox";
import ApplyLargeText from "../../common/apply/applyText";

const ApplyPhone = () => {
  return (
    <ApplyPhoneContainer>
      <ApplyTitle>핸드폰 필요 여부</ApplyTitle>
      <ApplyBox size="small">
        <ApplyLargeText>핸드폰이 필요하신가요?</ApplyLargeText>
      </ApplyBox>
    </ApplyPhoneContainer>
  );
};

export default ApplyPhone;
