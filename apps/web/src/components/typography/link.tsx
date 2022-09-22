import { HTMLProps } from 'react';
import { InputProps } from '../types';
import Link from 'next/link';
import { TypeProps } from 'styled-typography';
import { getContrastColor } from '../../utils/color-utils';
import styled from 'styled-components';

type IntLinkParams = {
  href: string;
  className?: string;
  children: React.ReactNode;
}
const IntLink = ({href, className, children}: IntLinkParams) => (
  <Link href={href} passHref>
    <a className={className}>{children}</a>
  </Link>
)

export const InternalLink = styled(IntLink)<InputProps & TypeProps & HTMLProps<HTMLAnchorElement>>`
  color: ${props => props.disabled 
    ? props.theme.colors.disabled.main
    : getContrastColor(props.theme.colors.background.default, props.theme.colors.primary.main, props.theme.colors.primary.dark)
  };
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  border-bottom: 4px solid ${props => getContrastColor(props.theme.colors.background.default, props.theme.colors.primary.main, props.theme.colors.primary.dark)};

  &:hover {
    font-weight: ${props => props.theme.typography.weight.bold};
  }
`
