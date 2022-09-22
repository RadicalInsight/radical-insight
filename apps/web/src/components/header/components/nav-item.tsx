import Link from 'next/link';
import styled from 'styled-components';

type NavItemProps = {
  href: string;
  className?: string;
  children: string | React.ReactNode;
}
const NavigationItem = ({href, className, children}: NavItemProps) => (
    <Link href={href} passHref>
      <a className={className}>{children}</a>
    </Link>
)

export const NavItem = styled(NavigationItem)`
  color: ${props => props.theme.colors.primary.contrast};
  cursor: pointer;
  margin: 0.5rem;
  padding: 0.5rem;
  text-decoration: none;

  &:hover {
    font-weight: ${props => props.theme.typography.weight.bold}
  }
`;
