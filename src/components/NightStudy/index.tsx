import { ErrorBoundary } from "react-error-boundary";
import { ApplyContainer, ApplyTopWrap } from "../Apply/style";
import MyNightStudyItem from "./NightStudyItem";
import { Suspense } from "react";
import NightStudyFallBackLoader from "../Common/FallbackLoader/NightStudy";

const NightStudy = () => {
  return (
    <ApplyContainer>
      <ApplyTopWrap>My 신청</ApplyTopWrap>
      <ErrorBoundary fallback={<>error...</>}>
        <Suspense fallback={<NightStudyFallBackLoader />}>
          <MyNightStudyItem />
        </Suspense>
      </ErrorBoundary>
    </ApplyContainer>
  );
};

export default NightStudy;
