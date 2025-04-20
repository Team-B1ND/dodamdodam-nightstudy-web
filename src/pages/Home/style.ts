import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  gap: 32px;
  padding: 58px 32px 58px 0;

  @media (max-width: 1068px), (max-height: 794px) {
    padding: 58px 32px 59px;
  }

  @media (max-width: 797px) {
    display: flex;
    flex-direction: column;

    padding: 58px 32px 59px;
  }
`;
