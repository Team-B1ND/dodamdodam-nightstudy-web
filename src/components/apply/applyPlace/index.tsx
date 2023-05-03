import ApplyBox from "../../common/apply/applyBox";
import ApplyLargeText from "../../common/apply/applyText";
import ApplyTitle from "../../common/apply/applyTitle";
import { ApplyPlaceContainer } from "./style";

const ApplyPlace = () => {
  return (
    <ApplyPlaceContainer>
      <ApplyTitle>학습정보</ApplyTitle>
      <ApplyBox size="large">
        <ApplyLargeText>학습장소</ApplyLargeText>
      </ApplyBox>
    </ApplyPlaceContainer>
  );
};

export default ApplyPlace;
