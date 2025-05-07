import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const Container = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  @media (max-width: 1068px) {
    width: 100%;
  }

  & > :nth-child(2) {
    display: none;
  }
`;

export const Wrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Box = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 12px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Headline.Bold}
`;

export const DateInfoWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 8px;
  padding: 0 8px;
`;

export const DateInfoBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & p {
    color: ${({ theme }) => theme.labelAlternative};
    ${DodamTypography.Headline.Medium}
  }
`;