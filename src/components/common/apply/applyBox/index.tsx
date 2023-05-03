import React from "react";
import { ApplyBoxProps } from "./types";
import { ApplyOptionBox } from "./style";

const ApplyBox = ({ children, size }: ApplyBoxProps) => {
  return <ApplyOptionBox size={size}>{children}</ApplyOptionBox>;
};

export default ApplyBox;
