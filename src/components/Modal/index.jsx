import React from "react";
import ReactDOM from "react-dom";
import { ModalCard, ModalContainer } from "./style";

const Modal = ({ children, handleModal, disablePadding }) => {
  const handleModalStatus = (e) => {
    if (e.target.id === "modal-container") {
      handleModal();
    }
  };

  return ReactDOM.createPortal(
    <ModalContainer onClick={handleModalStatus} id="modal-container">
      <ModalCard disablePadding={disablePadding}>{children}</ModalCard>
    </ModalContainer>,
    document.getElementById("modal"),
  );
};

export default Modal;
