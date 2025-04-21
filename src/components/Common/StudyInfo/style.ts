import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 12px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Headline.Bold}
`;

export const InfoWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 0 8px;
`;

export const StudyPlace = styled.div`
  min-width: 140px;
  display: flex;
  flex-direction: column;
  gap: 4px;

  & p {
    color: ${({ theme }) => theme.labelNormal};
    ${DodamTypography.Body1.Bold};
  }
`;


export const ContentDescription = styled.span`
  color: ${({ theme }) => theme.statusNegative};
  ${DodamTypography.Caption2.Regular};
`;

export const PlaceWrap = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
  padding: 10px 10px 10px 0;
`;

export const Place = styled.div`
  display: flex;
  align-items: center;

  gap: 8px;
  & p {
    color: ${({ theme }) => theme.labelNormal};
    ${DodamTypography.Label.Bold};
  }
`;

export const StudyContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StudyContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  & p {
    color: ${({ theme }) => theme.labelNormal};
    ${DodamTypography.Body1.Bold};
  }
`;

export const StudyContentTextArea = styled.textarea<{ $height : string }>`
  width: 100%;
  height: ${({ $height }) => $height};
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Label.Medium}

  border: none;
  ${DodamShape.Medium}
  background-color: ${({ theme }) => theme.fillNormal};
  padding: 12px;
  resize: none;
  outline: none;

  & ::placeholder {
    color: ${({ theme }) => theme.labelAlternative};
  }
`;

export const ButtonWrap = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;

  padding-right: 10px;
`;