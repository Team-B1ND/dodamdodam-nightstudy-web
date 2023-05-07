import styled from "styled-components";

export const NavBarItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top: 60px;
  color: ${({ theme }) => theme.contrast};
`;

export const NavBarItemBox = styled.div<{ pathName: string; linkName: string }>`
  width: 100%;
  height: 45px;
  cursor: pointer;
  color: ${({ pathName, theme, linkName }) =>
    pathName === linkName ? theme.contrast : "#828282"};

  font-size: 20px;
  padding: 0px 30px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-radius: 20px;
`;
