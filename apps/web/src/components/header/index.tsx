import { Nav } from "./components/nav-menu";
import styled from "styled-components";

export const Header = () => (
  <HeaderWrapper>
    <Title>Radical Insight</Title>
    <Nav />
  </HeaderWrapper>
);

const HeaderWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.primary.main};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0.5rem;
`;

const Title = styled.div`
  color: ${(props) => props.theme.colors.primary.contrast};
  font-family: ${(props) => props.theme.typography.fontFamily.heading};
  font-size: ${(props) =>
    `${parseInt(props.theme.typography.size.xlarge) * 1.5}px`};
  font-weight: ${(props) => props.theme.typography.weight.black};
  padding-top: ${(props) => props.theme.spacing.medium};
`;
