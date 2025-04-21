import { DodamShape, DodamTypography } from "@b1nd/dds-web"
import styled from "styled-components"

export const SelectProjectMember = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Headline.Bold}
  & div {
    background-color: ${({ theme }) => theme.backgroundNormal};
  }
  & p {
    background-color: ${({ theme }) => theme.backgroundNormal};
  }
`

export const SelectProjectMemberContainer = styled.div`
  display: flex;
  width: 100%;
  ${DodamShape.Medium}
  border: 1px ${({ theme}) => theme.lineAlternative} solid;
  height: 320px;
  padding: 16px;
  gap: 16px;
`

export const SelectProjectMemberSearch = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
`

export const SelectProjectMemberSelected = styled.div`
  display: flex;
  flex-direction: column;
  ${DodamShape.Small}
  border: 1px ${({ theme }) => theme.lineAlternative} solid;
  background-color: transparent;
  height: 100%;
  width: 50%;
  padding: 8px 12px;
  overflow-y: scroll;
`

export const SelectProjectMemberList = styled.div`
  ${DodamShape.Small}
  border: 1px ${({ theme }) => theme.lineAlternative} solid;
  background-color: transparent;
  height: 100%;
  overflow-y: scroll;
  padding: 8px 12px;
`
