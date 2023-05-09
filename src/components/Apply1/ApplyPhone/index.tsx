import React, { ChangeEvent } from "react";
import ApplyTitle from "../../Common1/Apply/applyTitle";
import {
  ApplyPhoneCheckBox,
  ApplyPhoneCheckInput,
  ApplyPhoneContainer,
  ApplyPhoneFlex,
} from "./style";
import ApplyLargeText from "../../Common1/Apply/ApplyText";
import ApplyRequireText from "../../Common1/RequireText";
import { Apply } from "../../../types/Apply1/apply.type";
import Box from "../../Common1/Apply/ApplyBox";

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
      <Box size="small">
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
      </Box>
    </ApplyPhoneContainer>
  );
};

export default ApplyPhone;
