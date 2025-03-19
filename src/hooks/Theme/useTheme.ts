import { useCallback, useMemo } from "react";
import { useRecoilState } from "recoil";
import { THEME_KEY } from "src/constants/Theme/theme.constant";
import { ETheme } from "src/enum/Theme/theme.enum";
import { themeModeAtom } from "src/store/Theme/theme.store";

const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useRecoilState<ETheme>(themeModeAtom);

  const themeColor = useMemo((): ETheme => {
    return currentTheme === "DARK" ? ETheme.DARK : ETheme.LIGHT;
  }, [currentTheme]);

  const handleTheme = useCallback((): void => {
    const switchTheme: ETheme =
      currentTheme === "DARK" ? ETheme.LIGHT : ETheme.DARK;
    window.localStorage.setItem(THEME_KEY, switchTheme);
    setCurrentTheme(switchTheme);
  }, [currentTheme, setCurrentTheme]);

  return {
    themeColor,
    handleTheme,
    currentTheme,
  };
};

export default useTheme;
