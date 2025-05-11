import { DodamShape } from "@b1nd/dds-web";
import styled from "styled-components";

export const Container = styled.div`
  width: 68%;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  ${DodamShape.Large}
  display: flex;

  @media (max-width: 1068px), (max-height: 794px) {
    margin-bottom: 24px;
  }

  @media (max-width: 797px) {
    width: 100%;
    margin-bottom: 0;
  }
`;

export const Wrap = styled.div`
  width: 100%;
  height: min-content;
  ${DodamShape.Large}

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.backgroundNormal};

  gap: 16px;
  padding: 24px;
`;

export const InfoContainer = styled.div`
  width: 51%;
  & > :nth-child(2) {
    display: none;
  }
  @media (max-width: 1068px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    & > :nth-child(2) {
    display: block;
    }
  }
`

export const ApplyInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 1068px) {
    & > :nth-child(2) {
    display: none;
    }
  }
`

export const ApplyInfo = styled.div`
  width: 100%;

  display: flex;
  gap: 12px;
  & > :nth-child(2) {
    display: none;
  }
  @media (max-width: 1068px) {
    display: flex;
    flex-direction: column;
    & > :nth-child(2) {
    display: block;
    }
  }
`;

export const Indicator = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 12px;
`

export const IndicatorButton = styled.div<{ $focus : "true" | "false" }>`
  background-color: ${({ $focus, theme }) => $focus === "true" ? theme.primaryNormal : theme.labelDisabled };
  border-radius: 99px;
  width: 10px;
  height: 10px;
  cursor: pointer;
`

export const ButtonWrap = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;

  padding-right: 10px;
`;