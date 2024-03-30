import styled from "styled-components";

export const NavBarItemContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top: 60px;
  color: ${({ theme }) => theme.contrast};
`;

export const NavBarItemBox = styled.div<{ isMatch: boolean }>`
  width: 100%;
  height: 45px;
  cursor: pointer;
  color: ${({ theme, isMatch }) => (isMatch ? theme.contrast : "#828282")};

  font-size: 20px;
  padding: 0px 30px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;
