import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const DataTableContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const DataTableNotContents = styled.div`
  display: flex;
  height: 440px;
  justify-content: center;
  align-items: center;
  ${DodamTypography.Headline.Medium}
  color: ${({ theme }) => theme.labelNormal};
`

export const DataTableBlock = styled.div<{ $size: number | "FILL" }>`
  display: ${({$size}) => ($size === "FILL" || $size < 160) ? "flex" : ""};
  text-align: start;
  justify-content: ${({$size}) => ($size === 40 || $size === 64 || $size === "FILL") ? "center" : "flex-start"};
  padding: ${({ $size }) => ($size === 40 || $size === 64 || $size === "FILL") ? "0" : "0 8px"};
  width: ${({ $size }) => $size === "FILL" ? "" : `${$size}px`};
  min-width: ${({ $size }) => $size === "FILL" ? "" : `${$size}px`};
  flex-grow: ${({ $size }) => $size === "FILL" ? 1 : 0};
  color: ${({ theme }) => theme.labelNormal};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 1220px) {
    width: ${({ $size }) => $size === "FILL" ? "" : $size >= 96 ? `${$size-36}px` : `${$size}px`};
    min-width: ${({ $size }) => $size === "FILL" ? "" : $size >= 96 ? `${$size-36}px` : `${$size}px`};
  }

  @media (max-width: 860px) {
    width: ${({ $size }) => $size === "FILL" ? "" : $size >= 96 ? `${$size-54}px` : `${$size}px`};
    min-width: ${({ $size }) => $size === "FILL" ? "" : $size >= 96 ? `${$size-54}px` : `${$size}px`};
  }
`