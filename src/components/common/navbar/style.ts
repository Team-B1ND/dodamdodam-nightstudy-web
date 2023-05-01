import styled from "styled-components";

export const NavBarContainer = styled.div`
  min-width: 340px;
  height: 100%;
  z-index: 1;
  padding: 40px 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundColor2};
  padding: 30px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-top: 0px;
  border-bottom: 0px;
`;

export const NavBarLogo = styled.img`
  height: 34px;
  object-fit: scale-down;
  margin-bottom: 20px;
`;

export const NavBarTitle = styled.h1`
  color: ${({ theme }) => theme.navBarColor};
`;

export const NavBarTopWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const NavBarProfileWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.navBarColor};
  border-radius: 25px;
  color: ${({ theme }) => theme.backgroundColor};
`;

export const NavBarProfileImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  object-fit: cover;
`;

export const NavBarMemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const NavBarName = styled.p`
  font-size: 18px;
  margin-top: 15px;
  font-weight: bold;
`;

export const NavBarClassroom = styled.p`
  font-size: 16px;
  margin-top: 8px;
`;
