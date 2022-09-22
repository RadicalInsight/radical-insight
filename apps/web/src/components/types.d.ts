import { HTMLProps } from "react";

export type BaseComponentProps = {
  color?: string;
  backgroundColor?: string;
  border?: string;
  margin?: string;
  padding?: string;
  children?: React.ReactNode;
};

export type InputProps = HTMLProps<HTMLInputElement> &
  BaseComponentProps & {
    disabled?: boolean;
    error?: boolean;
    focused?: boolean;
    primary?: boolean;
    secondary?: boolean;
    label?: string;
    customValidator?: (v: unknown) => boolean;
    variant?: string;
    value?: string | number;
  };

export type TextProps = BaseComponentProps & {
  bold?: boolean;
  italic?: boolean;
  lineHeight?: string | number;
  size?: string;
  weight?: string;
};
