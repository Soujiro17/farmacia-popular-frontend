import React from "react";
import ReactDOM from "react-dom";
import { ModalCard, ModalContainer } from "./style";

const MTablaFormularios = ({ children, handleModal }) => {
  const handleModalStatus = (e) => {
    if (e.target.id === "modal-container") {
      handleModal();
    }
  };

  return ReactDOM.createPortal(
    <ModalContainer onClick={handleModalStatus} id="modal-container">
      <ModalCard>{children}</ModalCard>
    </ModalContainer>,
    document.getElementById("modal"),
  );
};

export default MTablaFormularios;
