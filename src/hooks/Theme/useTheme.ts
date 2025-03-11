import { useCallback, useMemo } from "react";
import { useRecoilState } from "recoil";
import { DefaultTheme } from "styled-components";
import { THEME_KEY, ETheme } from "../../constants/Theme/theme.constant";
import { darkTheme, lightTheme } from "../../styles/theme";
import { themeModeAtom } from "../../store/Theme/theme.store";

const useTheme = () => {
  const [currentTheme, setCurrentTheme] =
    useRecoilState<ETheme>(themeModeAtom);

  const { DARK, LIGHT } = ETheme;

  const themeColor = useMemo((): DefaultTheme => {
    return currentTheme === "DARK" ? darkTheme : lightTheme;
  }, [currentTheme]);

  const handleTheme = useCallback((): void => {
    const switchTheme = currentTheme === DARK ? LIGHT : DARK;
    window.localStorage.setItem(THEME_KEY, String(switchTheme));
    setCurrentTheme(switchTheme);
  }, [DARK, LIGHT, currentTheme, setCurrentTheme]);

  return {
    themeColor,
    handleTheme,
    currentTheme,
  };
};

export default useTheme;
