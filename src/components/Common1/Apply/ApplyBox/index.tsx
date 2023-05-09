import { ApplyBoxProps } from "./types";
import { ApplyOptionBox } from "./style";

const Box = ({ children, size, style }: ApplyBoxProps) => {
  return (
    <ApplyOptionBox style={style} size={size}>
      {children}
    </ApplyOptionBox>
  );
};

export default Box;
