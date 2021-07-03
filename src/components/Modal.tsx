import React from "react";
import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  background: #00000080;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.screens.tablet} {
    display: block;
  }
`;

interface IModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ children, onClose }: IModalProps) => {
  return <StyledModal onClick={onClose}>{children}</StyledModal>;
};

export default Modal;
