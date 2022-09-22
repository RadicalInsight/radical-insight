import styled from "styled-components"

type ModalProps = {
  children: React.ReactNode,
}

export const Modal = ({children}: ModalProps) => (
  <ModalWrapper>
    {children}
  </ModalWrapper>
);

const ModalWrapper = styled.div``;
