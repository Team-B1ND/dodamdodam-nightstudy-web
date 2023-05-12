import { skeletonAnimtaion } from "@b1nd/b1nd-styled-components-util";
import styled from "styled-components";
import { NavBarMemberWrap, NavBarProfileWrap } from "../../NavBar/style";

const UserBoxFallBackLoader = () => {
  return (
    <>
      <NavBarProfileWrap>
        <ProfileImg />
        <NavBarMemberWrap>
          <Name />
          <Grade />
        </NavBarMemberWrap>
      </NavBarProfileWrap>
    </>
  );
};

const ProfileImg = styled.div`
  width: 145px;
  height: 145px;
  border-radius: 100%;
  object-fit: cover;
  ${skeletonAnimtaion}
  position: absolute;
  left: -100px;
  z-index: 1;
`;

const Name = styled.div`
  width: 130px;
  height: 25px;
  ${skeletonAnimtaion};
`;

const Grade = styled.div`
  width: 130px;
  height: 25px;
  ${skeletonAnimtaion};
`;

export default UserBoxFallBackLoader;
