import * as S from "./style";
import { DodamCheckBox, DodamDivider } from "@b1nd/dds-web";

const PhoneRequire = () => {
  return (
    <S.Container>
      <S.Wrap>
        <S.Box>
          <S.Title>핸드폰 필요여부</S.Title>
          <S.PhoneRequireInfo>
            <S.PhoneCheckWrap>
              <S.PhoneTitle>핸드폰이 필요하신가요?</S.PhoneTitle>
              <DodamCheckBox
                isDisabled={false}
                onClick={() => console.log("체크박스 클릭")}
              />
            </S.PhoneCheckWrap>
            <S.PhoneDescription>
              체크하셨다면 사유를 꼭 적어주세요
            </S.PhoneDescription>
            <S.PhoneReason
              disabled={false} // disable useState로 관리하기
              placeholder="핸드폰이 필요한 사유를 적어주세요."></S.PhoneReason>
          </S.PhoneRequireInfo>
        </S.Box>
      </S.Wrap>
      <DodamDivider type="Small" />
    </S.Container>
  );
};

export default PhoneRequire;
