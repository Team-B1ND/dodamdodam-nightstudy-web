import {
  ApplyBottomWrap,
  ApplyContainer,
  ApplyMidWrap,
  ApplyTopWrap,
} from "./style";
import ApplyDeadline from "./ApplyDeadline";
import ApplyPhone from "./ApplyPhone";
import ApplyPlace from "./ApplyPlace";
import useApply from "../../hooks/NightStudy/useApplyNightStudy";
import Button from "../Common/Button";
import useTokenCheck from "../../hooks/Util/useTokenCheck";

const Apply = () => {
  const {
    minDate,
    maxDate,
    postData,
    onChangePhoneCheck,
    onChangeReason,
    checkOnlyOne,
    onChangeContent,
    onChangeEndDate,
    onChangeStartDate,
    onSubmitNightStudy,
  } = useApply();
  useTokenCheck();
  return (
    <ApplyContainer>
      <ApplyTopWrap>
        2차 심자 신청 <span>| 22:50~23:50</span>
      </ApplyTopWrap>
      <ApplyMidWrap>
        <ApplyDeadline
          postData={postData}
          minDate={minDate}
          maxDate={maxDate}
          onChangeEndDate={onChangeEndDate}
          onChangeStartDate={onChangeStartDate}
        />
        <ApplyPhone
          postData={postData}
          onChangeReason={onChangeReason}
          onChangePhoneCheck={onChangePhoneCheck}
        />
      </ApplyMidWrap>
      <ApplyBottomWrap>
        <ApplyPlace
          checkOnlyOne={checkOnlyOne}
          onChangeContent={onChangeContent}
          postData={postData}
        />
      </ApplyBottomWrap>
      <Button onClick={onSubmitNightStudy}>제출</Button>
    </ApplyContainer>
  );
};

export default Apply;
