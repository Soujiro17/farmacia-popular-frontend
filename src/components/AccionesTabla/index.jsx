/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { Circulos, Container } from "./style";

const AccionesTabla = ({ onRemove, onGo, onEdit }) => {
  return (
    <Container>
      <Circulos className="delete" onClick={onRemove} />
      <Circulos className="go" onClick={onGo} />
      <Circulos className="edit" onClick={onEdit} />
    </Container>
  );
};

export default AccionesTabla;
