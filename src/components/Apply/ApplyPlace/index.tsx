import { ChangeEvent } from "react";
import ApplyRequireText from "../../Common/RequireText";
import ApplyLargeText from "../../Common/Apply/ApplyText";
import ApplyTitle from "../../Common/Apply/ApplyTitle";
import {
  ApplyPlaceContainer,
  ApplyPlaceFlex,
  ApplyStudyContentBox,
  ApplyStudyContentInput,
} from "./style";
import { Apply } from "../../../types/Apply/apply.type";
import Box from "../../Common/Apply/ApplyBox";


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
        style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
      >
        <ApplyStudyContentBox>
          <ApplyPlaceFlex>
            <ApplyRequireText htmlFor="content">* </ApplyRequireText>
            <ApplyLargeText htmlFor="content">학습내용</ApplyLargeText>
            <ApplyRequireText htmlFor="content">
              *10 ~ 250자 이상 작성해주세요.
            </ApplyRequireText>
          </ApplyPlaceFlex>
          <ApplyStudyContentInput
            id="content"
            name="content"
            value={postData.content}
            onChange={onChangeContent}
            placeholder="학습 할 내용을 작성해주세요"
          />
        </ApplyStudyContentBox>
      </Box>
    </ApplyPlaceContainer>
  );
};

export default ApplyPlace;
