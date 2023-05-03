import { ReactNode } from "react";

export interface ApplyBoxProps {
  children: ReactNode;
  size: SizeType;
}

export type SizeType = "large" | "small";
