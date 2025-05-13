import styled from "styled-components";

export const ApplyInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 1068px) {
    & > :nth-child(2) {
    display: none;
    }
  }
`

export const ApplyInfo = styled.div`
  width: 100%;

  display: flex;
  gap: 12px;
  & > :nth-child(2) {
    display: none;
  }
  @media (max-width: 1068px) {
    display: flex;
    flex-direction: column;
    & > :nth-child(2) {
    display: block;
    }
  }
`;

export const Page2Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const ButtonWrap = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;

  padding-right: 10px;
`;