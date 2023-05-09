import { ButtonContainer } from "./style";

interface ButtonProps {
  children: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
};

export default Button;
