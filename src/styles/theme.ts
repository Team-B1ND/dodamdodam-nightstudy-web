import { DefaultTheme } from "styled-components";
import { b1ndPalette, createPalette } from "@b1nd/b1nd-design-core";

const palette = createPalette({ mainColor: "#607EAA" });

export const lightTheme: DefaultTheme = {
  ...b1ndPalette,

  contrast: "#000000",
  backgroundColor: "#f8f9fa",
  backgroundColor2: "#ffffff",
  backgroundColor3: "#fafafc",
  backgroundColor4: "#ffffff",
  backgroundPointColor: "#f1edf4",
  borderColor: "#f0eff2",
  darkmodeButtonColor: "#efefef",
  navBarColor: "#607EAA",
  iconColor: "#FFDA15",
};

export const darkTheme: DefaultTheme = {
  ...b1ndPalette,

  contrast: "#ffffff",
  backgroundColor: "rgb(18, 18, 18)",
  backgroundColor2: "#1e1e1e",
  backgroundColor3: "#fafafc",
  backgroundColor4: "#ffffff",
  backgroundPointColor: "#f1edf4",
  borderColor: "#3d3d3d",
  darkmodeButtonColor: "#efefef",
  navBarColor: "#607EAA",
  iconColor: "#000000",
};
