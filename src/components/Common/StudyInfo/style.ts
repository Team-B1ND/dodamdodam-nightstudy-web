import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 16px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Headline.Bold}
`;

export const InfoWrap = styled.div`
  width: 100%;

  display: flex;

  gap: 50px;
  padding: 10px;
`;

export const StudyPlace = styled.div`
  width: auto;

  display: flex;
  flex-direction: column;

  gap: 5px;
`;

export const ContentTitle = styled.p`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Body1.Bold};
`;

export const ContentDescription = styled.p`
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

  gap: 20px;
`;

export const PlaceName = styled.p`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Caption1.Bold};
`;

export const StudyContent = styled.div`
  width: calc(100% - 250px);

  display: flex;
  flex-direction: column;

  gap: 5px;
`;

export const StudyContentTextArea = styled.textarea`
  width: 100%;
  max-width: 300px;
  min-width: 250px;
  min-height: 100px;
  aspect-ratio: 16 / 6;

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

export const ButtonWrap = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;

  padding-right: 10px;
`;
