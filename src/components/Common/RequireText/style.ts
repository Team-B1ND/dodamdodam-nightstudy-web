import styled, { CSSObject } from "styled-components";

export const ApplyRequireTextBox = styled.label<{ customStyle?: CSSObject }>`
  font-weight: 400;
  font-size: 10px;

  color: #ff3232;
  ${({ customStyle }) => customStyle}
`;
