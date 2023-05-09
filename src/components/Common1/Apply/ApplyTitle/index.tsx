import React from "react";
import { ApplyTitleProps } from "./types";
import { ApplyOptionTitle } from "./style";

const ApplyTitle = ({ children }: ApplyTitleProps) => {
  return <ApplyOptionTitle>{children}</ApplyOptionTitle>;
};

export default ApplyTitle;
