import ReactDOM from "react-dom";
import {
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
} from "./modal.style";

export type PropsWithChildren<P> = P & { children?: React.ReactNode };

export type ModalProps = {
  show: boolean;
  title: string;
  closeModal: () => void;
  handleSubmit: () => void;
};

function Modal({
  show,
  closeModal,
  title,
  children,
  handleSubmit,
}: PropsWithChildren<ModalProps>) {
  const rootElement = document.getElementById("root");

  if (!rootElement) return null;

  return ReactDOM.createPortal(
    <ModalContainer show={show} onClick={closeModal}>
      <ModalContent onClick={(e: Event) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <button onClick={handleSubmit}>Valider</button>
          <button onClick={closeModal}>Close</button>
        </ModalFooter>
      </ModalContent>
    </ModalContainer>,

    rootElement
  );
}

export default Modal;
