import { ReactNode } from "react";
import { CSSObject } from "styled-components";

export interface ApplyBoxProps {
  children: ReactNode;
  style?: CSSObject;
  size: SizeType;
}

export type SizeType = "large" | "small";
