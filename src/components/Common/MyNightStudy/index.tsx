import { DodamColor, DodamDivider, DodamTag, Trash } from "@b1nd/dds-web";
import * as S from "./style";
import { useTheme } from "styled-components";
import dateTransform from "utils/Transform/dateTransform";
import { useGetMyNightStudyQuery, useGetMyProjectNightStudyQuery } from "queries/NightStudy/nightstudy.query";
import MyNightStudyNull from "components/Common/Null/MyNightStudyNull/index";
import { NightStudy, ProjectNightStudy } from "types/NightStudy/nightstudy.type";
import useDeleteMyNightStudy from "hooks/NightStudy/useDeleteNightStudy";

interface Props {
  type: "Pending" | "Allow";
  isPersonalPage: boolean;
}

const MyNightStudy = ({ type, isPersonalPage }: Props) => {
  const theme = useTheme();
  const { handleClickDelete } = useDeleteMyNightStudy();
  const { data: MyNightStudyData } = useGetMyNightStudyQuery({
    suspense: true,
  });
  const { data: MyProjectNightStudyData } = useGetMyProjectNightStudyQuery({
    suspense: true,
  })

  const checkNightStudy = (
    props: NightStudy | ProjectNightStudy
  ): props is NightStudy => {
    return "doNeedPhone" in props;
  };

  const myNightStudyData =
    type === "Pending"
      ? isPersonalPage
        ? MyNightStudyData?.data.filter((item) => item.status === "PENDING" || item.status === "REJECTED")
        : MyProjectNightStudyData?.data.filter((item) => item.status === "PENDING" || item.status === "REJECTED")
      : isPersonalPage
        ? MyNightStudyData?.data.filter((item) => item.status === "ALLOWED")
        : MyProjectNightStudyData?.data.filter((item) => item.status === "ALLOWED")

  return (
    <S.Container>
      {myNightStudyData?.length === 0 ? (
        <MyNightStudyNull type={type} />
      ) : (
        myNightStudyData?.map((item) => (
          <S.Wrap key={item.id}>
            <S.InfoWrap>
              <S.TitleWrap>
                <DodamTag
                  text={item.status === "PENDING" ? "대기중" : item.status === "REJECTED" ? "거절됨" : "승인됨"}
                  color="blue"
                  customStyle={{
                    height: "32px",
                    backgroundColor: item.status === "REJECTED" ? DodamColor.red50 : item.status === "PENDING" ? theme.lineNormal : DodamColor.blue50,
                  }}
                />
                <S.IconWrap onClick={() => handleClickDelete(item.id, isPersonalPage ? "PERSONAL" : "PROJECT")}>
                  <Trash color="lineNormal" />
                </S.IconWrap>
              </S.TitleWrap>
              <S.ProjectName>{checkNightStudy(item) || item.name}</S.ProjectName>
              <p>{checkNightStudy(item) ? item.content : item.description}</p>
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
            {checkNightStudy(item) ?
              <S.DateWrap>
                <S.Date>
                  심자<span>{`${item.type.substring(item.type.length-1)}까지`}</span>
                </S.Date>
              </S.DateWrap>
            : (
              <S.DateWrap>
                <S.Date>
                  심자<span>{checkNightStudy(item) || item.type === "NIGHT_STUDY_PROJECT_1" ? 1 : 2}</span>
                </S.Date>
                <S.Date>
                  사용 실<span>{checkNightStudy(item) ? "없음" : item.room ? `랩 ${item.room?.slice(-2)}실` : "지정 대기중"}</span>
                </S.Date>
              </S.DateWrap>
            )}
          </S.Wrap>
        ))
      )}
    </S.Container>
  );
};

export default MyNightStudy;
