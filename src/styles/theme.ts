import { DefaultTheme } from "styled-components";
import { b1ndPalette } from "@b1nd/b1nd-design-core";


export const lightTheme: DefaultTheme = {
  ...b1ndPalette,

  contrast: "#000000",
  backgroundColor: "#f8f9fa",
  backgroundColor2: "#FFFFFF",
  backgroundColor3: "#fafafc",
  backgroundColor4: "#ffffff",
  backgroundPointColor: "#f1edf4",
  borderColor: "#F0EFF2",
  darkmodeButtonColor: "#efefef",
  navBarColor: "#607EAA",
  iconColor: "#FFDA15",
  inputColor: "#F0F0F0",
  logoColor: "#3A83F0 ",
};

export const darkTheme: DefaultTheme = {
  ...b1ndPalette,

  contrast: "#ffffff",
  backgroundColor: "#1E1E1E",
  backgroundColor2: "#252525",
  backgroundColor3: "#fafafc",
  backgroundColor4: "#ffffff",
  backgroundPointColor: "#f1edf4",
  borderColor: "#3d3d3d",
  darkmodeButtonColor: "#efefef",
  navBarColor: "#607EAA",
  iconColor: "#000000",
  inputColor: "#323232",
  logoColor: "#3A83F0 ",
};
