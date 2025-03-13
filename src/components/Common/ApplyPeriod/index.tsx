import * as S from "./style";
import { Calender, DodamDivider } from "@b1nd/dds-web";

const ApplyPeriod = () => {
  return (
    <S.Container>
      <S.Wrap>
        <S.Box>
          <S.Title>신청 기한</S.Title>
          <S.DateInfoWrap>
            <S.DateInfoBox>
              <S.DateInfoTitle>시작 날짜</S.DateInfoTitle>
              <S.DateWrap>
                <S.Date>7월 18일</S.Date>
                <S.DateIcon>
                  <Calender color="primaryNormal" size={24} />
                </S.DateIcon>
              </S.DateWrap>
            </S.DateInfoBox>
            <S.DateInfoBox>
              <S.DateInfoTitle>종료 날짜</S.DateInfoTitle>
              <S.DateWrap>
                <S.Date>7월 18일</S.Date>
                <S.DateIcon>
                  <Calender color="primaryNormal" size={24} />
                </S.DateIcon>
              </S.DateWrap>
            </S.DateInfoBox>
          </S.DateInfoWrap>
        </S.Box>
      </S.Wrap>
      <DodamDivider type="Small" />
    </S.Container>
  );
};

export default ApplyPeriod;
