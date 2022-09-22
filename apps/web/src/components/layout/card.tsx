import { Heading } from "../typography";
import React from "react";
import styled from "styled-components";

type CardProps = {
    title: string;
    children: React.ReactNode;
};

export const Card = ({ title, children }: CardProps) => {
    return (
        <CardWrapper>
            <CardTitle level={2}>{title}</CardTitle>
            <CardBody>{children}</CardBody>
        </CardWrapper>
    );
};

const CardWrapper = styled.div`
    border: 1px solid ${props => props.theme.colors.black};
    border-radius: ${props => props.theme.spacing.small};
    margin: 0 ${props => props.theme.spacing.medium} ${props => props.theme.spacing.medium} 0;
    padding: ${props => props.theme.spacing.medium};
    flex: 1;

    &:last-of-type {
        margin: 0 0 ${props => props.theme.spacing.medium} 0;
    }
`;

const CardTitle = styled(Heading)`
    margin: 0;
    padding: 0;
`

const CardBody = styled.div``;
