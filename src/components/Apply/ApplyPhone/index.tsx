import { ChangeEvent } from "react";
import {
  ApplyPhoneCheckBox,
  ApplyPhoneCheckInput,
  ApplyPhoneContainer,
  ApplyPhoneFlex,
} from "./style";
import ApplyLargeText from "../../Common/Apply/ApplyText";
import ApplyRequireText from "../../Common/RequireText";
import { Apply } from "../../../types/Apply/apply.type";
import Box from "../../Common/Apply/ApplyBox";
import ApplyTitle from "../../Common/Apply/ApplyTitle";

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
          <ApplyLargeText htmlFor="doNeedPhone">
            핸드폰이 필요하신가요?
          </ApplyLargeText>
          <ApplyPhoneCheckBox
            id="doNeedPhone"
            name="doNeedPhone"
            type="checkbox"
            value="isPdoNeedPhonehone"
            onChange={onChangePhoneCheck}
          />
        </ApplyPhoneFlex>
        <ApplyRequireText htmlFor="reason" style={{ marginTop: "7px" }}>
          *체크하셨다면 사유를 필수로 적어주세요.
        </ApplyRequireText>
        <ApplyPhoneCheckInput
          id="reasonForPhone"
          placeholder={
            postData.doNeedPhone
              ? "핸드폰이 필요한 사유를 적어주세요"
              : "핸드폰 사용 여부를 먼저 체크해주세요"
          }
          name="reasonForPhone"
          value={postData.reasonForPhone}
          onChange={onChangeReason}
          disabled={!postData.doNeedPhone}
        />
      </Box>
    </ApplyPhoneContainer>
  );
};

export default ApplyPhone;
