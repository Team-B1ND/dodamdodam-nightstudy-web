import { atom } from "recoil";
import { ThemeType } from "../../constants/theme/theme.constant";
import { getTheme } from "../../util/getTheme";

export const themeModeAtom = atom<ThemeType>({
  key: "theme/themeModeAtom",
  default: getTheme(),
});
