import { DodamShape } from "@b1nd/dds-web";
import styled from "styled-components";

export const Container = styled.div`
  width: 68%;
  height: 100%;

  display: flex;

  @media (max-width: 797px) {
    width: 100%;
  }
`;

export const Wrap = styled.div`
  width: 100%;
  height: min-content;

  display: flex;
  flex-direction: column;

  ${DodamShape.Large}
  background-color: ${({ theme }) => theme.backgroundNormal};

  gap: 16px;
  padding: 24px;

  & > :nth-child(2) {
    display: block;

    @media (max-width: 1068px) {
      display: none;
    }
  }
`;

export const ApplyInfo = styled.div`
  width: 100%;

  display: flex;

  @media (max-width: 1068px) {
    display: flex;
    flex-direction: column;
  }
`;
