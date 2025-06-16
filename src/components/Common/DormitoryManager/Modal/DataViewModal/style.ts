import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const PersonalModalContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 480px;
  padding: 24px;
  ${DodamShape.ExtraLarge}
  background-color: ${({ theme }) => theme.backgroundNormal};
`

export const PersonalModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > p {
    color: ${({ theme }) => theme.labelNormal};
    ${DodamTypography.Heading1.Bold};
  }
  > button {
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`

export const PersonalDataContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 16px;
`

export const PersonalItemContainer = styled.div<{ $size: "BIG" | "SMALL" }>`
  display: flex;
  flex-direction: column;

  & p {
    color: ${({ theme }) => theme.labelAlternative};
    ${DodamTypography.Caption1.Medium};
  }

  color: ${({ theme }) => theme.labelNormal};
  ${({$size}) => $size === "SMALL" ? DodamTypography.Body1.Bold : DodamTypography.Title3.Bold};
`

export const ProjectMemberContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  column-gap: 8px;

  & p {
    color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Body1.Bold};
  }
`