import { ApplyOptionLargeText } from "./style";

interface ApplyLargeTextProps {
  children: string;
  htmlFor?: string;
}

const ApplyLargeText = ({ children, htmlFor }: ApplyLargeTextProps) => {
  return (
    <ApplyOptionLargeText htmlFor={htmlFor}>{children}</ApplyOptionLargeText>
  );
};

export default ApplyLargeText;
