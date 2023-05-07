import React from "react";
import { ApplyBoxProps } from "./types";
import { ApplyOptionBox } from "./style";

const ApplyBox = ({ children, size, style }: ApplyBoxProps) => {
  return (
    <ApplyOptionBox style={style} size={size}>
      {children}
    </ApplyOptionBox>
  );
};

export default ApplyBox;
