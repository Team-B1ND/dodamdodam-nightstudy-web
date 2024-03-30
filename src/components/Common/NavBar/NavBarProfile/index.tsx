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
        src={MemberData?.data.profileImage! || DefaultProfileImage}
      />
      <NavBarMemberWrap>
        <NavBarName>{MemberData?.data.name}</NavBarName>
        <NavBarClassroom>{`${MemberData?.data.student?.grade || 0}학년 ${
          MemberData?.data.student?.room || 0
        }반 ${MemberData?.data.student?.number || 0}번`}</NavBarClassroom>
      </NavBarMemberWrap>
    </NavBarProfileWrap>
  );
};

export default NavBarProfile;
