import React, { ChangeEvent } from "react";
import ApplyTitle from "../../common/apply/applyTitle";
import {
  ApplyPhoneCheckBox,
  ApplyPhoneCheckInput,
  ApplyPhoneContainer,
  ApplyPhoneFlex,
} from "./style";
import ApplyBox from "../../common/apply/applyBox";
import ApplyLargeText from "../../common/apply/applyText";
import ApplyRequireText from "../../common/apply/applyRequireText";
import { Apply } from "../../../types/apply/apply.type";

interface Props {
  postData: Apply;
  onChangeReason: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangePhoneCheck: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ApplyPhone = ({
  onChangePhoneCheck,
  onChangeReason,
  postData,
}: Props) => {
  return (
    <ApplyPhoneContainer>
      <ApplyTitle>핸드폰 필요 여부</ApplyTitle>
      <ApplyBox size="small">
        <ApplyPhoneFlex>
          <ApplyLargeText>핸드폰이 필요하신가요?</ApplyLargeText>
          <ApplyPhoneCheckBox
            name="isPhone"
            type="checkbox"
            value="isPhone"
            onChange={onChangePhoneCheck}
          />
        </ApplyPhoneFlex>
        <ApplyRequireText style={{ marginTop: "7px" }}>
          *체크하셨다면 사유를 필수로 적어주세요.
        </ApplyRequireText>
        <ApplyPhoneCheckInput
          placeholder="핸드폰이 필요한 사유를 적어주세요"
          name="reason"
          value={postData.reason}
          onChange={onChangeReason}
        />
      </ApplyBox>
    </ApplyPhoneContainer>
  );
};

export default ApplyPhone;
