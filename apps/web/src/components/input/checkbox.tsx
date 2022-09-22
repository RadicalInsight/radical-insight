import { InputProps, TextProps } from "../types";

import styled from "styled-components";

type CheckboxProps = InputProps & TextProps;

export const Checkbox = ({...props}: CheckboxProps) => (
  <CheckboxWrapper></CheckboxWrapper>
);

const CheckboxWrapper = styled.div<CheckboxProps>``;
