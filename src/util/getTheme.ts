import { ThemeType } from "../constants/theme/theme.constant";

export const getTheme = (): ThemeType => {
  let themeMode = false;

  if (typeof window !== "undefined" && themeMode === undefined) {
    const isDarkTheme: boolean = window.matchMedia(
      `(prefers-color-scheme: dark)`
    ).matches;

    if (isDarkTheme) {
      return true;
    }
    return false;
  }
  return themeMode as ThemeType;
};
