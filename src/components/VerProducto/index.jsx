/* eslint-disable no-underscore-dangle */
import React, { useState } from "react";
import Modal from "../Modal";
import {
  CarritoContainer,
  Circulo,
  Container,
  LeftSide,
  Line,
  RightSide,
  Text,
  Title,
} from "./style";

const VerProducto = ({ values, handleModal }) => {
  const [cantidad, setCantidad] = useState(0);

  const handleCantidad = (type) => {
    if (type === "+") {
      setCantidad(cantidad + 1);
    } else {
      if (cantidad === 0) return;
      setCantidad(cantidad - 1);
    }
  };

  return (
    <Modal handleModal={handleModal} disablePadding>
      <Container>
        <LeftSide>
          <img src={values.src || "/no-image.png"} alt="producto" />
        </LeftSide>
        <RightSide>
          {/* {JSON.stringify(values || {})} */}
          <Title>{values.nombre}</Title>
          <Text>Código: {values._id}</Text>
          <Line />
          <Text>{values.descripcion}</Text>
          <Text className="precio">
            ${values.valor.toLocaleString("es-CL")}
          </Text>
          <CarritoContainer>
            <Circulo onClick={() => handleCantidad()}>-</Circulo>
            <Text className="cantidad">{cantidad}</Text>
            <Circulo onClick={() => handleCantidad("+")}>+</Circulo>
          </CarritoContainer>
        </RightSide>
      </Container>
    </Modal>
  );
};

export default VerProducto;
