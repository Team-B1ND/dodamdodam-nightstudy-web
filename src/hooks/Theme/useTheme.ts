import { useCallback, useMemo } from "react";
import { useRecoilState } from "recoil";
import { DefaultTheme } from "styled-components";
import { THEME_KEY, ThemeType } from "../../constants/Theme/theme.constant";
import { darkTheme, lightTheme } from "../../styles/theme";
import { themeModeAtom } from "../../store/Theme/theme.store";
import cookie from "../../libs/Cookie/cookie";

const useTheme = () => {
  const [currentTheme, setCurrentTheme] =
    useRecoilState<ThemeType>(themeModeAtom);

  const themeColor = useMemo((): DefaultTheme => {
    return currentTheme === "DARK" ? darkTheme : lightTheme;
  }, [currentTheme]);

  const handleTheme = useCallback((): void => {
    const switchTheme: ThemeType = currentTheme === "DARK" ? "LIGHT" : "DARK";
    cookie.setCookie(THEME_KEY, switchTheme);
    setCurrentTheme(switchTheme);
  }, [currentTheme, setCurrentTheme]);

  return {
    themeColor,
    handleTheme,
    currentTheme,
  };
};

export default useTheme;
