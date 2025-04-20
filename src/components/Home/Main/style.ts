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

  
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.backgroundNormal};

  gap: 16px;
  padding: 24px;
  
  // Project 패치 이후에 3으로 바꿀 것
  & > :nth-child(2) {
    display: block;

    @media (max-width: 1068px) {
      display: none;
    }
  }
`;

export const ApplyInfo = styled.div`
  width: 100%;

  display: flex;
  gap: 12px;
  @media (max-width: 1068px) {
    display: flex;
    flex-direction: column;
  }
`;
