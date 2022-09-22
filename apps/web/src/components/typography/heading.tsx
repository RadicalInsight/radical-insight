import { TextProps } from "../types";
import styled from "styled-components";
import { theme } from "../../themes";

type HeadingProps = TextProps & { 
  level: 1 | 2 | 3 | 4 | 5 | 6,
  displayLevel?: 1 | 2 | 3 | 4 | 5 | 6,
 }
export const Heading = styled.div.attrs<HeadingProps>(({ level, displayLevel }) => ({
  'role': 'heading',
  'aria-level': level,
  'as': ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'][(displayLevel ?? level) - 1],
}))<HeadingProps>`
  color: ${props => color(props)};
  font-family: ${props => props.theme.typography.fontFamily.heading};
  font-size: ${props => props.theme.typography.size.headings[props.level - 1]}
`

Heading.defaultProps = {
  color: 'text',
}

const color = (props) => {
  return props.theme.colors[props.color]['main'];
}
