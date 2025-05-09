import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const SideBarContainer = styled.div`
  width: 32%;
  height: min-content;

  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const Container = styled.div`
  width: 100%;
  height: min-content;

  display: flex;
  flex-direction: column;

  ${DodamShape.Large}
  background-color: ${({ theme }) => theme.backgroundNormal};

  gap: 16px;
  padding: 16px;

  @media (max-width: 797px) {
    width: 100%;
    margin-bottom: 24px;
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.labelStrong};
  ${DodamTypography.Headline.Bold};
`;

export const Wrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 10px;

  & > div:nth-child(1) {
    width: 100%;
  }
`;
