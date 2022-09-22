import styled from "styled-components";

type TooltipProps = {
  children: React.ReactNode;
}

export const Tooltip = ({children}: TooltipProps) => (
  <TooltipWrapper>{children}</TooltipWrapper>
);

const TooltipWrapper = styled.div``;
