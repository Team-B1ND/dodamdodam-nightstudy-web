import { DodamDivider, DodamTag, Trash } from "@b1nd/dds-web";
import * as S from "./style";
import { useTheme } from "styled-components";
import { NightStudy } from "../../../types/NightStudy/nightstudy.type";
import dateTransform from "../../../utils/Transform/dateTransform";
import useDeleteMyNightStudy from "../../../hooks/NightStudy/useDeleteMyNightStudy";
import { useEffect, useRef, useState } from "react";

interface Props {
  type: "Pending" | "Allow";
  myNightStudyData: NightStudy[];
}

const MyNightStudy = ({ type, myNightStudyData }: Props) => {
  const theme = useTheme();
  const { handleClickDelete } = useDeleteMyNightStudy();
  const dateRef = useRef<HTMLDivElement>(null);
  const [isNarrow, setIsNarrow] = useState(false);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries.length) return;
      const { width } = entries[0].contentRect;
      setIsNarrow(width < 230);
    });

    if (dateRef.current) {
      resizeObserver.observe(dateRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <S.Container>
      {myNightStudyData === undefined ? (
        <div>없음</div>
      ) : (
        myNightStudyData.map((item) => (
          <S.Wrap key={item.id}>
            <S.InfoWrap>
              <S.TitleWrap>
                <DodamTag
                  text={type === "Pending" ? "대기중" : "승인됨"}
                  color="blue"
                  customStyle={{
                    height: "32px",
                    backgroundColor: type === "Pending" && theme.lineNormal,
                  }}
                />
                <S.IconWrap onClick={() => handleClickDelete(item.id)}>
                  <Trash color="lineNormal" />
                </S.IconWrap>
              </S.TitleWrap>
              <S.Content>{item.content}</S.Content>
              <DodamDivider type="Small" />
            </S.InfoWrap>
            <S.DateWrap ref={dateRef} isNarrow={isNarrow}>
              <S.Date>
                시작<span>{dateTransform.monthDay(item.startAt)}</span>
              </S.Date>
              <S.Date>
                종료<span>{dateTransform.monthDay(item.endAt)}</span>
              </S.Date>
            </S.DateWrap>
          </S.Wrap>
        ))
      )}
    </S.Container>
  );
};

export default MyNightStudy;
