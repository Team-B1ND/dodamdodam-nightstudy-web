import {
  NavBarContainer,
  NavBarLogo,
  NavBarTitle,
  NavBarTopWrap,
  NavBarProfileWrap,
  NavBarProfileImg,
  NavBarMemberContainer,
  NavBarName,
  NavBarClassroom,
} from "./style";
import logo from "../../../assets/logo/logo.svg";
import { BsFillMoonFill } from "react-icons/bs";
import { useGetMyMember } from "../../../queries/member/member.query";
import DefaultProfileImage from "../../../assets/common/defaultProfile.png";
import NavBarItem from "./navbarItem";

const NavBar = () => {
  const { data: MemberData } = useGetMyMember();

  return (
    <NavBarContainer>
      <NavBarTopWrap>
        <NavBarLogo
          src={logo}
          onClick={() => (window.location.href = "http://dodam.b1nd.com/")}
          alt={"header/headerLogo"}
        />
        <NavBarTitle>Late Night</NavBarTitle>
        <BsFillMoonFill style={{ marginLeft: "4px" }} />
      </NavBarTopWrap>
      <NavBarProfileWrap>
        <NavBarProfileImg
          src={MemberData?.data.member.profileImage! || DefaultProfileImage}
        />
        <NavBarMemberContainer>
          <NavBarName>{MemberData?.data.member.name}</NavBarName>
          <NavBarClassroom>{`${MemberData?.data.classroom.grade}학년 ${MemberData?.data.classroom.room}반 ${MemberData?.data.number}번`}</NavBarClassroom>
        </NavBarMemberContainer>
      </NavBarProfileWrap>
      <NavBarItem />
    </NavBarContainer>
  );
};

export default NavBar;
