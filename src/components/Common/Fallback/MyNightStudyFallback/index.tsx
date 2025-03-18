import { DodamDivider } from "@b1nd/dds-web";
import * as S from "./style";

const MyNightStudyFallback = () => {
  return (
    <S.Container>
      <S.Wrap>
        <S.Box>
          <S.TitleWrap>
            <S.Tag />
          </S.TitleWrap>
          <S.ContentWrap>
            <S.Content />
          </S.ContentWrap>
          <DodamDivider type="Small" />
        </S.Box>
        <S.DateWrap>
          {Array.from({ length: 2 }).map((_, idx) => (
            <S.Date key={idx} />
          ))}
        </S.DateWrap>
      </S.Wrap>
    </S.Container>
  );
};

export default MyNightStudyFallback;
