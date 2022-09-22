import { RadicalTheme } from "./types";

type TypographyThemeParams = {
  baseFontSize?: number;
  headingsMultipliers?: Array<number>;
  fontFamilies?: {
    body: string;
    heading: string;
    monospace: string;
  };
};

export const typography = ({
  baseFontSize = 16,
  headingsMultipliers = [2, 1.5, 1.17, 1, 0.83, 0.67],
  fontFamilies = {
    body: "Roboto",
    heading: "Roboto Slab",
    monospace: "Menlo",
  },
}: TypographyThemeParams): Pick<RadicalTheme, "typography"> => ({
  typography: {
    fontFamily: {
      body: fontFamilies.body + ", Verdana, sans-serif",
      heading: fontFamilies.heading + ", Verdana, sans-serif",
      monospace: fontFamilies.monospace + ", Courier New, monospace",
    },
    size: {
      headings: headingsMultipliers.map((x) => `${baseFontSize * x}px`),
      small: `${baseFontSize * headingsMultipliers[4]}px`,
      normal: `${baseFontSize * headingsMultipliers[3]}px`,
      large: `${baseFontSize * headingsMultipliers[2]}px`,
      xlarge: `${baseFontSize * headingsMultipliers[0]}px`,
    },
    style: {
      disabled: "italic",
      emphasis: "bold",
      normal: "regular",
    },
    weight: {
      light: "300",
      normal: "400",
      bold: "700",
      black: "800",
    },
  },
});
