import { ChangeEvent, Dispatch, SetStateAction, Suspense } from "react";
import ApplyRequireText from "../../Common/RequireText";
import ApplyLargeText from "../../Common/Apply/ApplyText";
import ApplyTitle from "../../Common/Apply/ApplyTitle";
import {
  ApplyPlaceBox,
  ApplyPlaceContainer,
  ApplyPlaceFlex,
  ApplyStudyContentBox,
  ApplyStudyContentInput,
} from "./style";
import { Apply } from "../../../types/Apply/apply.type";
import Box from "../../Common/Apply/ApplyBox";
import ApplyPlaceItem from "./ApplyPlaceItem";
import CheckBoxFallBackLoader from "../../Common/FallbackLoader/CheckBox";
import { ErrorBoundary } from "react-error-boundary";

interface Props {
  checkOnlyOne: (e: ChangeEvent<HTMLInputElement>) => void;
  postData: Apply;
  onChangeContent: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const ApplyPlace = ({ checkOnlyOne, postData, onChangeContent }: Props) => {
  return (
    <ApplyPlaceContainer>
      <ApplyTitle>학습정보</ApplyTitle>
      <Box
        size="large"
        style={{ display: "flex", flexDirection: "column", rowGap: "23px" }}
      >
        <ApplyPlaceBox>
          <ApplyPlaceFlex>
            <ApplyRequireText htmlFor="place">* </ApplyRequireText>
            <ApplyLargeText htmlFor="place">학습장소</ApplyLargeText>
            <ApplyRequireText htmlFor="place">
              *하나만 선택해주세요.
            </ApplyRequireText>
          </ApplyPlaceFlex>
          <ErrorBoundary fallback={<>error</>}>
            <Suspense fallback={<CheckBoxFallBackLoader />}>
              <ApplyPlaceItem checkOnlyOne={checkOnlyOne} />
            </Suspense>
          </ErrorBoundary>
        </ApplyPlaceBox>

        <ApplyStudyContentBox>
          <ApplyPlaceFlex>
            <ApplyRequireText htmlFor="content">* </ApplyRequireText>
            <ApplyLargeText htmlFor="content">학습내용</ApplyLargeText>
          </ApplyPlaceFlex>
          <ApplyStudyContentInput
            id="content"
            name="content"
            value={postData.content}
            onChange={onChangeContent}
            placeholder="학습 할 내용을 자세하고 구체적이게 적어주세요"
          />
        </ApplyStudyContentBox>
      </Box>
    </ApplyPlaceContainer>
  );
};

export default ApplyPlace;
