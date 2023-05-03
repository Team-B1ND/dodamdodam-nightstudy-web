import {
  ApplyBottomWrap,
  ApplyContainer,
  ApplyMidWrap,
  ApplyTopWrap,
} from "./style";
import ApplyDeadline from "./applyDeadline";
import ApplyPhone from "./applyPhone";
import ApplyPlace from "./applyPlace";

const Apply = () => {
  return (
    <ApplyContainer>
      <ApplyTopWrap>
        2차 심자 신청 <span>| 22:40~23:50</span>
      </ApplyTopWrap>
      <ApplyMidWrap>
        <ApplyDeadline />
        <ApplyPhone />
      </ApplyMidWrap>
      <ApplyBottomWrap>
        <ApplyPlace />
      </ApplyBottomWrap>
    </ApplyContainer>
  );
};

export default Apply;
