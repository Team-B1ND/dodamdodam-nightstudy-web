import { useGetMyLateNights } from "../../../queries/LateNight/latenight.query";
import {
  LateNightAllow,
  LateNightContainer,
  LateNightDate,
  LateNightDelBtn,
  LateNightInfoBox,
  LateNightItemBox,
  LateNightName,
  LateNightProfile,
  LateNightUserGrade,
  LateNightUserInfoBox,
} from "./style";
import DefaultProfileImage from "../../../assets/common/defaultProfile.png";
import useDeleteAppy from "../../../hooks/Apply/useDeleteApply";

const MyLateNightItem = () => {
  const { data } = useGetMyLateNights({ suspense: true });
  const { onDeletePost } = useDeleteAppy();
  return (
    <LateNightContainer>
      {data?.data.map((data) => {
        const startAt = data.startAt.substring(0, 10);
        const endAt = data.endAt.substring(0, 10);
        return (
          <>
            <LateNightItemBox key={data.id}>
              <LateNightProfile src={DefaultProfileImage} />
              <LateNightInfoBox>
                <LateNightUserInfoBox>
                  <LateNightName>{data.student.name}</LateNightName>
                  <LateNightUserGrade>{`${data.student.grade}학년 ${data.student.room}반 ${data.student.number}번`}</LateNightUserGrade>
                </LateNightUserInfoBox>
                <LateNightDate>{`${startAt} ~ ${endAt}`}</LateNightDate>
              </LateNightInfoBox>
              <LateNightAllow
                status={
                  data.allowCheck === "ALLOWED"
                    ? "ALLOWED"
                    : data.allowCheck === "DENIED"
                    ? "DENIED"
                    : "PENDING"
                }
              >
                {data.allowCheck === "ALLOWED"
                  ? "승인 완료"
                  : data.allowCheck === "DENIED"
                  ? "승인 거절"
                  : "승인대기"}
              </LateNightAllow>
              <LateNightDelBtn onClick={() => onDeletePost({ id: data.id })}>
                X
              </LateNightDelBtn>
            </LateNightItemBox>
          </>
        );
      })}
    </LateNightContainer>
  );
};

export default MyLateNightItem;
