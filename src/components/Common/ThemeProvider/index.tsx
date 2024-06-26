import { ThemeProvider } from "styled-components";
import useTheme from "../../../hooks/Theme/useTheme";
import { ReactNode } from "react";

import GlobalStyle from "../../../styles/GlobalStyles";

interface Props {
  children: ReactNode;
}

const ThemeProviderContainer = ({ children }: Props) => {
  const { themeColor } = useTheme();
  return (
    <ThemeProvider theme={themeColor}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
export default ThemeProviderContainer;
