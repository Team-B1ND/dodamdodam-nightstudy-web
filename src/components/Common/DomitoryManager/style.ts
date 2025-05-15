import { DodamShape } from "@b1nd/dds-web";
import styled from "styled-components";

export const ManagerContainer = styled.div`
  padding: 58px 16px 58px 32px;
  ${DodamShape.Large}
  background-color: ${({ theme }) => theme.backgroundNormal};
  padding: 24px;
  gap: 12px;
`