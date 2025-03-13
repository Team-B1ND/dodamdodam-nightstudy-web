import * as S from "./style";
import { DodamCheckBox, DodamFilledButton } from "@b1nd/dds-web";

const StudyInfo = () => {
  return (
    <S.Container>
      <S.Title>학습 정보</S.Title>
      <S.InfoWrap>
        <S.StudyPlace>
          <S.ContentTitle>학습 장소</S.ContentTitle>
          <S.ContentDescription>한곳만 선택해주세요.</S.ContentDescription>
          <S.PlaceWrap>
            {Array.from({ length: 5 }).map((_, idx) => (
              <S.Place key={idx}>
                <S.PlaceName>프로젝트 5실</S.PlaceName>
                <DodamCheckBox
                  isDisabled={false}
                  onClick={() => console.log("체크박스 클릭")}
                />
              </S.Place>
            ))}
          </S.PlaceWrap>
        </S.StudyPlace>
        <S.StudyContent>
          <S.ContentTitle>학습 내용</S.ContentTitle>
          <S.ContentDescription>
            10 ~ 250 이내로 작성해주세요.
          </S.ContentDescription>
          <S.StudyContentTextArea placeholder="학습 내용을 입력해주세요."></S.StudyContentTextArea>
        </S.StudyContent>
      </S.InfoWrap>
      <S.ButtonWrap>
        <DodamFilledButton
          size="Large"
          text="제출"
          width={107}
          textTheme="staticWhite"
          typography={["Body1", "Bold"]}
        />
      </S.ButtonWrap>
    </S.Container>
  );
};

export default StudyInfo;
