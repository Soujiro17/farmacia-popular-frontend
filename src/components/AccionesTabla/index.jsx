/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { Circulos, Container } from "./style";

const AccionesTabla = ({ navigate, value }) => {
  const onDelete = () => {
    if (!window.confirm("Deseas eliminar este registro?"));
  };

  const onGo = () => {
    navigate("/registro/view", { state: { value } });
  };

  const onEdit = () => {
    navigate("/registro/edit", { state: { value } });
  };

  return (
    <Container>
      <Circulos className="delete" onClick={onDelete} />
      <Circulos className="go" onClick={onGo} />
      <Circulos className="edit" onClick={onEdit} />
      {/* <Accion onDelete={onDelete} />
      <Accion onGo={onGo} />
      <Accion onEdit={onEdit} /> */}
    </Container>
  );
};

export default AccionesTabla;
