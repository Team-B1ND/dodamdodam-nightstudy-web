import {
  ApplyBottomWrap,
  ApplyButtonContainer,
  ApplyContainer,
  ApplyMidWrap,
  ApplyTopWrap,
} from "./style";
import ApplyDeadline from "./applyDeadline";
import ApplyPhone from "./applyPhone";
import ApplyPlace from "./applyPlace";
import useApply from "../../hooks/apply/useApply";
import Button from "../common/button";

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
    onSubmitLatenight,
  } = useApply();
  return (
    <ApplyContainer>
      <ApplyTopWrap>
        2차 심자 신청 <span>| 22:40~23:50</span>
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
      <Button onClick={onSubmitLatenight}>제출</Button>
    </ApplyContainer>
  );
};

export default Apply;
