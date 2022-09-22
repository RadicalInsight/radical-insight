export type RadicalTheme = {
  breakpoints: {
    small: string;  // mobile
    medium: string; // tablet
    large: string;  // desktop
  };
  colors: {
    black: string;
    white: string;
    grey: Required<ColorGradient>;
    background: {
      default: string;
    };
    primary: ColorType;
    secondary: ColorType;
    success: ColorType;
    info: ColorType;
    warning: ColorType;
    error: ColorType;
    disabled: ColorType;
    text: ColorType;
  };
  spacing: {
    xsmall: string;
    small: string;
    medium: string;
    large: string;
    xlarge: string;
  };
  typography: {
    fontFamily: {
      body: string;
      heading: string;
      monospace: string;
    },
    size: {
      headings: Array<string>;
      small: string;
      normal: string;
      large: string;
      xlarge: string;
    },
    style: {
      disabled: string;
      emphasis: string;
      normal: string;
    },
    weight: {
      light: string;
      normal: string;
      bold: string;
      black: string;
    },
  };
}

type ColorGradient = {
  100: string,
  200: string,
  300: string,
  400: string,
  500: string,
  600: string,
  700: string,
  800: string,
  900: string,
}

type ColorType = ColorGradient & {
    main: string;
    dark: string;
    light: string;
    contrast: string;
  }

type ColorPalette = {
  primary: ColorGradient,
  secondary: ColorGradient,
  grey: ColorGradient,
  success: ColorGradient,
  info: ColorGradient,
  warning: ColorGradient,
  error: ColorGradient,
}
