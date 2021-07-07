import React from "react";
import styled from "styled-components";

import { IModalProps } from "../types/common";

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

const Modal = ({ children, onClose }: IModalProps) => {
  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only run for events that occur on the modal backdrop itself and not the child elements
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <StyledModal onClick={closeModal} id="modal">
      {children}
    </StyledModal>
  );
};

export default Modal;
