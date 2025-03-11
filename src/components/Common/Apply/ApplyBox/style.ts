import styled, { CSSObject, css } from "styled-components";
import { SizeType } from "./types";

export const ApplyOptionBox = styled.div<{
  size: SizeType;
  customStyle?: CSSObject;
}>`
  border-radius: 10px;
  padding: 20px 30px;
  margin-top: 11px;

  background-color: ${({ theme }) => theme.backgroundColor2};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  min-width: 400px;
  ${({ size }) => SizeSet[size]}

  ${({ customStyle }) => customStyle}
`;

const SizeSet = {
  small: css`
    width: 400px;
    height: 227px;
  `,
  large: css`
    width: 100%;
    height: 250px;
  `,
};
