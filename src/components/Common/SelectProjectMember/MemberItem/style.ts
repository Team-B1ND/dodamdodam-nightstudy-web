import { DodamTypography } from "@b1nd/dds-web"
import styled from "styled-components"

export const MemberItemContainer = styled.div`
  width: 100%;
  min-height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-grow: 0;
`

export const MemberInfoContainer = styled.div`
  display: flex;
  gap: 8px;
`
export const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  ${DodamTypography.Label.Bold}
  color: ${({ theme }) => theme.labelNormal};
  > p {
    ${DodamTypography.Caption2.Medium}
    color: ${({ theme }) => theme.labelAlternative};
  }
`

export const MemberItemProfileImage = styled.img`
  width: 36px;
  aspect-ratio: 1;
  border-radius: 100%;
`