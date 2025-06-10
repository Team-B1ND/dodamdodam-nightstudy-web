import { DodamTypography } from "@b1nd/dds-web"
import styled from "styled-components"

export const PeriodSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Headline.Bold};

  > p {
    color:${({ theme }) => theme.statusNegative};
    ${DodamTypography.Caption2.Medium}
  }
`

export const PeriodSliderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 8px;
  padding: 0px 16px;
  margin-top: 12px;
`

export const PeriodIndicator = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const PeriodText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & p {
    ${DodamTypography.Body1.Bold};
  }
  & span {
    color: ${({ theme }) => theme.labelAlternative};
    ${DodamTypography.Caption2.Medium}
  }
`