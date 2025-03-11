import styled from "styled-components";

export const NavBarContainer = styled.div`
  min-width: 400px;
  min-height: 100vh;
  z-index: 1;
  padding: 40px 43px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundColor2};
  border-left: 1px solid ${({ theme }) => theme.borderColor};
  box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.05);
`;

export const NavBarLogo = styled.img`
  height: 58px;
  object-fit: scale-down;
  margin-bottom: 20px;
`;

export const NavBarTitle = styled.h1`
  color: ${({ theme }) => theme.logoColor};
  font-size: 18px;
`;

export const NavBarTopWrap = styled.div`
  display: flex;
  align-items: center;

  column-gap: 5px;
`;

export const NavBarProfileWrap = styled.div`
  width: 70%;
  height: 120px;
  position: relative;

  background: linear-gradient(96.13deg, #2272ff 48.26%, #2460b9 100%);
  border-radius: 19px;

  display: flex;
  align-items: center;

  margin-top: 70px;
  margin-left: 97px;
  padding-left: 63px;
`;

export const NavBarProfileImg = styled.img`
  width: 145px;
  height: 145px;
  border-radius: 100%;
  object-fit: cover;

  position: absolute;
  left: -100px;
  z-index: 1;
`;

export const NavBarMemberWrap = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 5px;
  color: #ffffff;
`;

export const NavBarName = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

export const NavBarClassroom = styled.p`
  font-size: 16px;
  font-weight: 400;
`;
