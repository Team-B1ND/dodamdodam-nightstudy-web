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
