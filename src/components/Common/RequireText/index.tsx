import { CSSProperties } from "react";
import { ApplyRequireTextBox } from "./style";

interface ApplyRequireTextProps {
  children: string;
  style?: CSSProperties;
}

const ApplyRequireText = ({ children, style }: ApplyRequireTextProps) => {
  return <ApplyRequireTextBox style={style}>{children}</ApplyRequireTextBox>;
};
export default ApplyRequireText;
