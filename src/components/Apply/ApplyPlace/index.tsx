import { ChangeEvent } from "react";
import ApplyRequireText from "../../Common/RequireText";
import ApplyLargeText from "../../Common/Apply/ApplyText";
import ApplyTitle from "../../Common/Apply/ApplyTitle";
import {
  ApplyPlaceBox,
  ApplyPlaceCheckBox,
  ApplyPlaceContainer,
  ApplyPlaceFlex,
  ApplyPlaceName,
  ApplyPlaceNameBox,
  ApplyStudyContentBox,
  ApplyStudyContentInput,
  ApplyStudyRoomBox,
} from "./style";
import { useGetPlaceQuery } from "../../../queries/Place/place.query";
import { Apply } from "../../../types/Apply/apply.type";
import Box from "../../Common/Apply/ApplyBox";

interface Props {
  checkOnlyOne: (e: ChangeEvent<HTMLInputElement>) => void;
  postData: Apply;
  onChangeContent: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const ApplyPlace = ({ checkOnlyOne, postData, onChangeContent }: Props) => {
  const { data } = useGetPlaceQuery();

  return (
    <ApplyPlaceContainer>
      <ApplyTitle>학습정보</ApplyTitle>
      <Box
        size="large"
        style={{ display: "flex", flexDirection: "column", rowGap: "23px" }}
      >
        <ApplyPlaceBox>
          <ApplyPlaceFlex>
            <ApplyRequireText>* </ApplyRequireText>
            <ApplyLargeText>학습장소</ApplyLargeText>
            <ApplyRequireText>*하나만 선택해주세요.</ApplyRequireText>
          </ApplyPlaceFlex>
          <ApplyPlaceNameBox>
            {data?.data.map((item) => {
              return (
                <>
                  <ApplyStudyRoomBox>
                    <ApplyPlaceCheckBox
                      name="placeId"
                      type="checkbox"
                      onChange={checkOnlyOne}
                      value={item.id}
                    />
                    <ApplyPlaceName>{item.name}</ApplyPlaceName>
                  </ApplyStudyRoomBox>
                </>
              );
            })}
          </ApplyPlaceNameBox>
        </ApplyPlaceBox>

        <ApplyStudyContentBox>
          <ApplyPlaceFlex>
            <ApplyRequireText>* </ApplyRequireText>
            <ApplyLargeText>학습내용</ApplyLargeText>
          </ApplyPlaceFlex>
          <ApplyStudyContentInput
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
