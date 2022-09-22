import { InputProps, TextProps } from "../types";
import { getStyle, getVariantString } from "./common";

import styled from "styled-components";

type ButtonProps = InputProps & TextProps;

export const Button = styled.button.attrs<ButtonProps>(({variant, disabled, primary, secondary}) => ({
    variant: variant ?? getVariantString(disabled, primary, secondary),
}))<ButtonProps>`
    appearance: button;
    background: ${props => getStyle(props)['background']};
	color: ${props => getStyle(props)['color']};
    font-style: ${props => props.disabled ? 'italic' : 'normal'};
    padding: 0.5rem 1.2rem;
    border: 1px solid;
    border-color: ${props => getStyle(props)['borderColor']};
    border-radius: 0.2rem;
    cursor: pointer;

    &:hover, &:active {
        background: ${props => getStyle(props)['hoverBackground']};
    }
`;
