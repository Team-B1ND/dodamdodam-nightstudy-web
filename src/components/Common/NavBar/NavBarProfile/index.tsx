import { useGetMyMember } from "../../../../queries/Member/member.query";
import {
  NavBarClassroom,
  NavBarMemberWrap,
  NavBarName,
  NavBarProfileImg,
  NavBarProfileWrap,
} from "../style";
import DefaultProfileImage from "../../../../assets/common/defaultProfile.png";

const NavBarProfile = () => {
  const { data: MemberData } = useGetMyMember({ suspense: true });

  return (
    <NavBarProfileWrap>
      <NavBarProfileImg
        src={MemberData?.data.member.profileImage! || DefaultProfileImage}
      />
      <NavBarMemberWrap>
        <NavBarName>{MemberData?.data.member.name}</NavBarName>
        <NavBarClassroom>{`${MemberData?.data.classroom.grade}학년 ${MemberData?.data.classroom.room}반 ${MemberData?.data.number}번`}</NavBarClassroom>
      </NavBarMemberWrap>
    </NavBarProfileWrap>
  );
};

export default NavBarProfile;
