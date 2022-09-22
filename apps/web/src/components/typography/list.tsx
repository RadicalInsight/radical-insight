import React from "react";
import { TextProps } from "../types"
import styled from "styled-components";

type ListProps = TextProps & {
  items: Array<string | React.ReactElement>;
  ordered?: boolean;
}

export const List = ({items, ordered = false}: ListProps) => {
  if (ordered) {
    return (
      <OrderedList>
        {items.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </OrderedList>
    );
  }
  return (
    <UnorderedList>
      {items.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
    </UnorderedList>
  )
}

const ListItem = styled.li``;
const OrderedList = styled.ol``;
const UnorderedList = styled.ul``;
