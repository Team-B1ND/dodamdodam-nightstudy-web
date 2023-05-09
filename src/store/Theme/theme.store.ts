import { atom } from "recoil";
import { ThemeType } from "../../constants/Theme/theme.constant";
import { getTheme } from "../../util/getTheme";

export const themeModeAtom = atom<ThemeType>({
  key: "theme/themeModeAtom",
  default: getTheme(),
});
