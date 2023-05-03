import { ApplyRequireTextBox } from "./style";

interface ApplyRequireTextProps {
  children: string;
}

const ApplyRequireText = ({ children }: ApplyRequireTextProps) => {
  return <ApplyRequireTextBox>{children}</ApplyRequireTextBox>;
};
export default ApplyRequireText;
