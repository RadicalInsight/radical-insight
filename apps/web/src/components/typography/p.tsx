import { TextProps } from "../types"
import styled from "styled-components"

export const P = styled.p<TextProps>`
  font-family: ${props => props.theme.typography.fontFamily.body};
  font-size: ${props => getFontSize(props)};
  font-style: ${props => props.italic ? 'italic' : 'normal'};
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
`

const getFontSize = (props) => {
  return props.theme.typography.size[props.size ?? 'normal'];
}
