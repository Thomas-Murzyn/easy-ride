import ReactDOM from "react-dom";
import {
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "./modal.style";
import { Typography } from "@mui/material";
import { CustomButton } from "../button/button.component";

export type PropsWithChildren<P> = P & { children?: React.ReactNode };

export type ModalProps = {
  show: boolean;
  title: string;
  closeModal: () => void;
  handleSubmit?: () => void;
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
          <Typography variant="h6">{title}</Typography>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          {handleSubmit && (
            <CustomButton variant="contained" onClick={handleSubmit}>
              Valider
            </CustomButton>
          )}
          <CustomButton
            variant="contained"
            onClick={closeModal}
            color="secondary"
          >
            Fermer
          </CustomButton>
        </ModalFooter>
      </ModalContent>
    </ModalContainer>,

    rootElement
  );
}

export default Modal;
