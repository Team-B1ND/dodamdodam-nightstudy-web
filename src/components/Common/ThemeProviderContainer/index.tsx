import { ReactNode } from "react";
import useTheme from "hooks/Theme/useTheme";
import { DodamThemeProvider, DodamGlobalStyles } from "@b1nd/dds-web";
import { ThemeProvider } from "styled-components";
import {
  April_Fools_Day_Dark_Theme,
  April_Fools_Day_Light_Theme,
} from "style/theme";

interface Props {
  children: ReactNode;
}

const ThemeProviderContainer = ({ children }: Props) => {
  const { themeColor } = useTheme();

  return (
    // <DodamThemeProvider theme={themeColor}>
    <ThemeProvider
      theme={
        themeColor === "LIGHT"
          ? April_Fools_Day_Light_Theme
          : April_Fools_Day_Dark_Theme
      }>
      <DodamGlobalStyles />
      {children}
    </ThemeProvider>
    // </DodamThemeProvider>
  );
};
export default ThemeProviderContainer;
