import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const Container = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;

  @media (max-width: 1068px) {
    width: 100%;
  }

  & > :nth-child(2) {
    display: none;

    @media (max-width: 1068px) {
      display: block;
    }
  }
`;

export const Wrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding-bottom: 16px;
`;

export const Box = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 10px;
  padding: 20px 10px 20px 20px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Headline.Bold}
`;

export const DateInfoWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 20px;
  padding: 10px;
`;

export const DateInfoBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 8px 0;
`;

export const DateInfoTitle = styled.p`
  color: ${({ theme }) => theme.labelAlternative};
  ${DodamTypography.Headline.Medium}
`;