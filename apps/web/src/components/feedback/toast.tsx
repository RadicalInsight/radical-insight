import styled from "styled-components";

type ToastProps = {
  level: string;
  children: React.ReactNode;
}

export const Toast = ({level, children}: ToastProps) => (
  <ToastWrapper level={level}>{children}</ToastWrapper>
);

const ToastWrapper = styled.div<ToastProps>``;
