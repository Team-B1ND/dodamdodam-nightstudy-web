import * as S from "./style";
import DefaultProfileImage from "../../../assets/common/defaultProfile.png";
import useDeleteNightStudy from "../../../hooks/NightStudy/useDeleteNightStudy";
import { useGetMyNightStudyQuery } from "../../../queries/NightStudy/nightstudy.query";

const MyNightStudyItem = () => {
  const { data } = useGetMyNightStudyQuery({ suspense: true });
  const { onDeletePost } = useDeleteNightStudy();
  return (
    <S.NightStudyContainer>
      {data?.data.map((data) => {
        const startAt = data.startAt.substring(0, 10);
        const endAt = data.endAt.substring(0, 10);
        return (
          <S.NightStudyItemBox key={data.id}>
            <S.NightStudyProfile src={DefaultProfileImage} />
            <S.NightStudyInfoBox>
              <S.NightStudyUserInfoBox>
                <S.NightStudyName>{data.student.name}</S.NightStudyName>
                <S.NightStudyUserGrade>{`${data.student.grade || 0}학년 ${
                  data.student.room || 0
                }반 ${data.student.number || 0}번`}</S.NightStudyUserGrade>
              </S.NightStudyUserInfoBox>
              <S.NightStudyDate>{`${startAt} ~ ${endAt}`}</S.NightStudyDate>
            </S.NightStudyInfoBox>
            <S.NightStudyAllow
              status={
                data.status === "ALLOWED"
                  ? "ALLOWED"
                  : data.status === "DENIED"
                  ? "DENIED"
                  : "PENDING"
              }
            >
              {data.status === "ALLOWED"
                ? "승인 완료"
                : data.status === "DENIED"
                ? "승인 거절"
                : "승인대기"}
            </S.NightStudyAllow>
            <S.NightStudyDelBtn onClick={() => onDeletePost({ id: data.id })}>
              X
            </S.NightStudyDelBtn>
          </S.NightStudyItemBox>
        );
      })}
    </S.NightStudyContainer>
  );
};

export default MyNightStudyItem;
