import { atom } from "recoil";
import { ETheme } from "../../constants/Theme/theme.constant";
import { getTheme } from "../../util/getTheme";

export const themeModeAtom = atom<ETheme>({
  key: "theme/themeModeAtom",
  default: getTheme(),
});
