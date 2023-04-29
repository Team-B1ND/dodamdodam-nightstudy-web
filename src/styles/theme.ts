import { DefaultTheme } from "styled-components";
import { b1ndPalette, createPalette } from "@b1nd/b1nd-design-core";

const palette = createPalette({ mainColor: "#C9A7F5" });

export const lightTheme: DefaultTheme = {
  ...b1ndPalette,

  contrast: "#000000",
  backgroundColor: "#ffffff",
  backgroundColor2: "#fafafc",
  backgroundColor3: "#fafafc",
  backgroundColor4: "#ffffff",
  backgroundPointColor: "#f1edf4",
  borderColor: "#f0eff2",
  darkmodeButtonColor: "#efefef",
  navBarColor: palette.mainColor,
};

export const darkTheme: DefaultTheme = {
  ...b1ndPalette,

  contrast: "#000000",
  backgroundColor: "#ffffff",
  backgroundColor2: "#fafafc",
  backgroundColor3: "#fafafc",
  backgroundColor4: "#ffffff",
  backgroundPointColor: "#f1edf4",
  borderColor: "#f0eff2",
  darkmodeButtonColor: "#efefef",
  navBarColor: palette.mainColor,
};
