import { P } from "../typography";
import React from "react";
import styled from "styled-components";

export const Footer: React.FC = () => {
  return (
    <Wrapper>
        <P size='small'>Footer with small text.</P>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    align-items: center;
    background-color: ${props => props.theme.colors.primary.main};
    color: ${props =>  props.theme.colors.primary.contrastText};
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0;
`
