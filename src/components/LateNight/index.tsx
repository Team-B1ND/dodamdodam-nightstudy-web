import { ErrorBoundary } from "react-error-boundary";
import { ApplyContainer, ApplyTopWrap } from "../Apply/style";
import MyLateNightItem from "./LateNightItem";
import { Suspense } from "react";
import LateNightFallBackLoader from "../Common/FallbackLoader/LateNight";

const LateNight = () => {
  return (
    <ApplyContainer>
      <ApplyTopWrap>My 신청</ApplyTopWrap>
      <ErrorBoundary fallback={<>error...</>}>
        <Suspense fallback={<LateNightFallBackLoader />}>
          <MyLateNightItem />
        </Suspense>
      </ErrorBoundary>
    </ApplyContainer>
  );
};

export default LateNight;
