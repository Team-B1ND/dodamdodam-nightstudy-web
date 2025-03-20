import { DodamDivider } from "@b1nd/dds-web";
import * as S from "./style";

interface Props {
  length: number;
}

const MyNightStudyFallback = ({ length }: Props) => {
  return (
    <S.Container>
      {Array.from({ length: length }).map((_, idx) => (
        <S.Wrap key={idx}>
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
      ))}
    </S.Container>
  );
};

export default MyNightStudyFallback;
