import React from "react";
import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  margin-top: -6rem;
  height: 100vh;
  width: 100%;
  background: #00000080;
  z-index: 1000;
`;

interface IModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: IModalProps) => {
  return <StyledModal>{children}</StyledModal>;
};

export default Modal;
