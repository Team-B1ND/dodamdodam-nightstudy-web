import styled, { css } from "styled-components";
import { SizeType } from "./types";

export const ApplyOptionBox = styled.div<{ size: SizeType }>`
  border-radius: 10px;
  padding: 41px 44px;
  margin-top: 11px;

  background-color: ${({ theme }) => theme.backgroundColor2};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  ${({ size }) => SizeSet[size]}
`;

const SizeSet = {
  small: css`
    width: 403px;
    height: 227px;
  `,
  large: css`
    width: 876px;
    height: 389px;
  `,
};
