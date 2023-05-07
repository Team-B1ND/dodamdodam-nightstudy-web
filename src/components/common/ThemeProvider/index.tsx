import { ThemeProvider } from "styled-components";
import useTheme from "../../../hooks/theme/useTheme";
import { ReactNode } from "react";
import GlobalStyle from "../../../styles/globalStyles";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

interface Props {
  children: ReactNode;
}

const ThemeProviderContainer = ({ children }: Props) => {
  const { themeColor } = useTheme();
  return (
    <ThemeProvider theme={themeColor}>
      <GlobalStyle />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {children}
      </LocalizationProvider>
    </ThemeProvider>
  );
};
export default ThemeProviderContainer;
