import styled from "styled-components";

export const NavBarItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top: 60px;
  color: ${({ theme }) => theme.contrast};
`;

export const NavBarItemBox = styled.div`
  width: 100%;
  height: 45px;
  cursor: pointer;
  font-size: 20px;
  padding: 0px 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-radius: 20px;
`;
