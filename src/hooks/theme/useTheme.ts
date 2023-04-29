import { useCallback, useMemo } from "react";
import { useRecoilState } from "recoil";
import { DefaultTheme } from "styled-components";
import { THEME_KEY, ThemeType } from "../../constants/theme/theme.constant";
import { darkTheme, lightTheme } from "../../styles/theme";
import { themeModeAtom } from "../../store/theme/theme.store";
import cookie from "../../libs/cookie/cookie";

const useTheme = () => {
  const [currentTheme, setCurrentTheme] =
    useRecoilState<ThemeType>(themeModeAtom);

  const themeColor = useMemo((): DefaultTheme => {
    return currentTheme === true ? darkTheme : lightTheme;
  }, [currentTheme]);

  const handleTheme = useCallback((): void => {
    const switchTheme: ThemeType = currentTheme === true ? false : true;
    cookie.setCookie(THEME_KEY, String(currentTheme));
    setCurrentTheme(switchTheme);
  }, [currentTheme, setCurrentTheme]);

  return {
    themeColor,
    handleTheme,
  };
};

export default useTheme;
