import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: white;
`;

export const HeaderLogo = styled.div`
  min-width: 120px;
  max-width: 120px;
  margin-right: 40px;
  height: 100%;
  display: flex;
  img {
    width: 100%;
    object-fit: scale-down;
    margin: auto auto 23%;
  }
`;
