import { DodamDivider, DodamTag, Trash } from "@b1nd/dds-web";
import * as S from "./style";
import { useTheme } from "styled-components";
import dateTransform from "../../../utils/Transform/dateTransform";
import useDeleteMyNightStudy from "../../../hooks/NightStudy/useDeleteMyNightStudy";
import { useEffect, useRef, useState } from "react";
import { useGetMyNightStudyQuery } from "../../../queries/NightStudy/nightstudy.query";
import MyNightStudyNull from "../Null/MyNightStudyNull";

interface Props {
  type: "Pending" | "Allow";
}

const MyNightStudy = ({ type }: Props) => {
  const theme = useTheme();
  const { handleClickDelete } = useDeleteMyNightStudy();
  const { data: MyNightStudyData } = useGetMyNightStudyQuery({
    suspense: true,
  });

  const myNightStudyData =
    type === "Pending"
      ? MyNightStudyData?.data.filter((item) => item.status === "PENDING")
      : MyNightStudyData?.data.filter((item) => item.status === "ALLOWED");

  return (
    <S.Container>
      {myNightStudyData?.length === 0 ? (
        <MyNightStudyNull />
      ) : (
        myNightStudyData?.map((item) => (
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
            <S.DateWrap>
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
