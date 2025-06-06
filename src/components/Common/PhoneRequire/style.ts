import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

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

  gap: 12px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Headline.Bold}
`;

export const PhoneRequireInfo = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 5px;
  padding: 0 8px;

  & span {
    color: ${({ theme }) => theme.statusNegative};
    ${DodamTypography.Caption2.Regular}
  }
`;

export const PhoneCheckWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & p {
    color: ${({ theme }) => theme.labelNormal};
    ${DodamTypography.Body1.Bold};
  }
`;

export const PhoneReason = styled.textarea`
  width: 100%;
  aspect-ratio: 16 / 4;

  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Label.Medium}

  border: none;
  ${DodamShape.Medium}
  background-color: ${({ theme }) => theme.fillNormal};

  padding: 10px;
  resize: none;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.labelAlternative};
  }
`;
