import { NavItem } from './nav-item';
import React from 'react';
import styled from 'styled-components';

export const Nav = () => {
  return (
    <nav>
      <NavMenu>
        <li><NavItem href='/'>Home</NavItem></li>
        <li><NavItem href='/test'>Test Page</NavItem></li>
      </NavMenu>
    </nav>
  );
};

const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  align-items: baseline;
  margin: 0;
  margin-block: 0;
  margin-inline: 0;
  padding: 0;
  padding-inline: 0;

  @media (max-width: ${props => props.theme.breakpoints.small}) {
    display: none;
  }
`;
