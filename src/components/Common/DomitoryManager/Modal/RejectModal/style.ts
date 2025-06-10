import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const RejectModalContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  ${DodamShape.ExtraLarge}
  background-color: ${({ theme }) => theme.backgroundNormal};
`

export const RejectModalData = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  & p {
    color: ${({ theme }) => theme.labelNormal};
    ${DodamTypography.Heading1.Bold}
  }
`

export const RejectModalButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`