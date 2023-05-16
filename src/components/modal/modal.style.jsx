import styled, { css } from "styled-components";

const slideModal = css`
  transform: translateY(0);
  opacity: 1;
  pointer-events: visible;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: all 0.3s ease-in-out;
  pointer-events: none;
  ${({ show }) => show && slideModal}
`;

export const ModalContent = styled.div`
  width: 500px;
  background-color: #fff;
  border: 1px solid grey;
  border-radius: 10px;
  box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);

  @media (max-width: 600px) {
    width: 400px;
  }
`;

export const ModalHeader = styled.div`
  padding: 10px;
`;

export const ModalTitle = styled.h4`
  margin: 0;
`;

export const ModalBody = styled.div`
  padding: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;

export const ModalFooter = styled.div`
  padding: 10px;

  button {
    padding: 5px 10px;
    font-size: 13px;
    cursor: pointer;
    margin: 0px 10px;
  }
`;
