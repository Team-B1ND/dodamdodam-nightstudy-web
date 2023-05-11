import { ApplyRequireTextBox } from "./style";
import { CSSObject } from "styled-components";

interface ApplyRequireTextProps {
  children: string;
  style?: CSSObject;
  htmlFor?: string;
}

const ApplyRequireText = ({
  children,
  style,
  htmlFor,
}: ApplyRequireTextProps) => {
  return (
    <ApplyRequireTextBox htmlFor={htmlFor} customStyle={style}>
      {children}
    </ApplyRequireTextBox>
  );
};
export default ApplyRequireText;
