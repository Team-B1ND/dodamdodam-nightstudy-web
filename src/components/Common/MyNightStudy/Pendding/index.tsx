import { DodamDivider, DodamTag, Trash } from "@b1nd/dds-web";
import * as S from "../style";
import { useTheme } from "styled-components";

const PenddingMyNightStudy = () => {
  const theme = useTheme();

  return (
    <S.Container>
      {Array.from({ length: 3 }).map((_, idx) => (
        <S.Wrap key={idx}>
          <S.InfoWrap>
            <S.TitleWrap>
              <DodamTag
                text="대기중"
                color="default"
                customStyle={{
                  height: "32px",
                  color: theme.staticWhite,
                  backgroundColor: theme.lineNormal,
                }}
              />
              <S.IconWrap onClick={() => console.log("삭제")}>
                <Trash />
              </S.IconWrap>
            </S.TitleWrap>
            <S.Content>
              바인드라서 일해야 되요...
              <br />
              살려주세요 부장이 패요 ㅠㅜ
            </S.Content>
            <DodamDivider type="Small" />
          </S.InfoWrap>
          <S.DateWrap>
            <S.Date>시작: 11월 06일</S.Date>
            <S.Date>종료: 11월 06일</S.Date>
          </S.DateWrap>
        </S.Wrap>
      ))}
    </S.Container>
  );
};

export default PenddingMyNightStudy;
