import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const SearchBarContainer = styled.section`
  display: flex;
  width: 100%;
  height: 48px;
  justify-content: space-between;
  align-items: center;
`

export const SearchBarInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 400px;
  height: 48px;
  background-color: ${({ theme }) => theme.fillNormal};
  ${DodamShape.Small}
  padding: 0 12px;

  > input {
    background-color: transparent;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.labelAssistive};
    ${DodamTypography.Headline.Medium}

    border: none;
    outline: none;
  }
`

export const SearchBarTagContainer = styled.div`
  display: flex;
  gap: 12px;
`