import { CSSProperties, ReactNode } from "react";

export interface ApplyBoxProps {
  children: ReactNode;
  style?: CSSProperties;
  size: SizeType;
}

export type SizeType = "large" | "small";
