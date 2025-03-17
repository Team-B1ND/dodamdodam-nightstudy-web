import styled from "styled-components";

export const PageTemplateContainer = styled.div`
  width: 100%;
  min-width: 542px;
  height: 100vh;

  display: flex;
  background-color: ${({ theme }) => theme.backgroundNeutral};

  user-select: none;

  @media (max-width: 1068px) {
    height: min-content;
  }
`;
