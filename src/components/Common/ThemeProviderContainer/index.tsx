import { ReactNode } from "react";
import useTheme from "hooks/Theme/useTheme";
import { DodamThemeProvider, DodamGlobalStyles } from "@b1nd/dds-web";

interface Props {
  children: ReactNode;
}

const ThemeProviderContainer = ({ children }: Props) => {
  const { themeColor } = useTheme();

  return (
    <DodamThemeProvider theme={themeColor}>
      <DodamGlobalStyles />
      {children}
    </DodamThemeProvider>
  );
};
export default ThemeProviderContainer;
