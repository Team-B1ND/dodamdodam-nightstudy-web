import styled from "styled-components";

export const DataTableContainer = styled.section`
  display: flex;
  flex-direction: column;
  
  width: 100%;
`

export const DataTableBlock = styled.div<{ $size: number | "FILL" }>`
  display: flex;
  justify-content: ${({$size}) => ($size === 40 || $size === 64 || $size === "FILL") ? "center" : "flex-start"};
  align-items: center;
  padding: ${({$size}) => ($size === 40 || $size === 64 || $size === "FILL") ? "0" : "0 0 0 8px"};
  width: ${({ $size }) => $size === "FILL" ? "" : `${$size}px`};
  height: 48px;
  flex-grow: ${({ $size }) => $size === "FILL" ? 1 : 0};
  color: ${({ theme }) => theme.labelNormal};
`