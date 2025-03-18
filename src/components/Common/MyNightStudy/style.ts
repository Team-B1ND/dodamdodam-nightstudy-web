import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-height: 350px;

  display: flex;
  flex-direction: column;

  overflow-y: auto;
  gap: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Wrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  ${DodamShape.Large}

  gap: 12px;
  padding: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.fillNormal};
  }
`;

export const InfoWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 12px;
  padding: 16px 12px;

  @media (min-width: 794px) and (max-width: 1270px) {
    padding: 16px 12px 0;
  }
`;

export const TitleWrap = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  // DodamTag span
  & > div > span {
    color: ${({ theme }) => theme.staticWhite};
    ${DodamTypography.Body1.Bold}
  }
`;

export const IconWrap = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
`;

export const Content = styled.p`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Body1.Medium}

  white-space: pre-line;
`;

export const DateWrap = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  padding: 0 10px;

  @media (min-width: 794px) and (max-width: 1270px) {
    flex-direction: column;
    gap: 5px;
  }
`;

export const Date = styled.p`
  color: ${({ theme }) => theme.labelAlternative};
  ${DodamTypography.Body2.Medium}

  display: flex;
  align-items: center;

  span {
    color: ${({ theme }) => theme.labelNormal};
    ${DodamTypography.Headline.Medium}

    margin-left: 7px;
  }
`;
