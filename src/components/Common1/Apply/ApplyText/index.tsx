import { ApplyOptionLargeText } from "./style";

interface ApplyLargeTextProps {
  children: string;
}

const ApplyLargeText = ({ children }: ApplyLargeTextProps) => {
  return <ApplyOptionLargeText>{children}</ApplyOptionLargeText>;
};

export default ApplyLargeText;
