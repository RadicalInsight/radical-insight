import styled from "styled-components";

export const FlexRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;

  * {
    margin-right: ${props => props.theme.spacing.medium}
  }
`;
