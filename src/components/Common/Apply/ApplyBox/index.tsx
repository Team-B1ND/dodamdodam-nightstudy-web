import { ApplyBoxProps } from "./types";
import { ApplyOptionBox } from "./style";

const Box = ({ children, size, style }: ApplyBoxProps) => {
  return (
    <ApplyOptionBox customStyle={style} size={size}>
      {children}
    </ApplyOptionBox>
  );
};

export default Box;
