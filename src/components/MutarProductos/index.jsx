/* eslint-disable prefer-destructuring */
import React, { useState } from "react";
import Modal from "../Modal";
import Input from "../../shared/Input";
import Label from "../../shared/Label";
import useUser from "../../hooks/useUser";
import {
  Title,
  ValuesContainer,
  SubTitle,
  Form,
  RightContainer,
  ImgProducto,
  FormGroup,
  FormWrapper,
  MutarButton,
  ButtonWrapper,
} from "./style";
import usePreview from "../../hooks/usePreview";

const initialValues = {
  nombre: "",
  descripcion: "",
  cantidad: 0,
  necesitaReceta: false,
  src: "",
  img: null,
};

const MutarProductos = ({ handleModal, value }) => {
  const [values, setValues] = useState(value === "add" ? initialValues : value);

  const preview = usePreview(values.img);

  const { updateProducto, addProducto } = useUser();

  const onClickUpdate = () => {
    updateProducto({
      value: values,
      callBack: () => {
        handleModal("");
      },
    });
  };

  const onClickAdd = () => {
    const finalValue = { ...values, src: preview };

    addProducto({
      value: finalValue,
      callBack: () => {
        handleModal("");
      },
    });
  };

  const handleValues = (e) => {
    let value = e.target.value;

    if (e.target.name === "img") {
      value = e.target.files;
    } else if (e.target.name === "necesitaReceta") {
      value = !values.necesitaReceta;
    }

    setValues((prev) => ({ ...prev, [e.target.name]: value }));
  };

  return (
    <Modal handleModal={handleModal} value={value}>
      <Title>{values.nombre || "Nombre producto"}</Title>
      <SubTitle>Código: {value.codigo || "Código producto"}</SubTitle>
      <ValuesContainer>
        <FormWrapper>
          <Form>
            <FormGroup>
              <Label htmlFor="nombre">Nombre</Label>
              <Input
                id="nombre"
                name="nombre"
                value={values.nombre}
                onChange={handleValues}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="descripcion">Descripción</Label>
              <Input
                id="descripcion"
                name="descripcion"
                value={values.descripcion}
                onChange={handleValues}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="cantidad">Cantidad</Label>
              <Input
                id="cantidad"
                name="cantidad"
                value={values.cantidad}
                onChange={handleValues}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="valor">Valor</Label>
              <Input
                id="valor"
                name="valor"
                value={values.valor}
                onChange={handleValues}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="necesitaReceta">Receta</Label>
              <Input
                id="necesitaReceta"
                name="necesitaReceta"
                value={values.necesitaReceta}
                checked={values.necesitaReceta}
                type="checkbox"
                onChange={handleValues}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="src">Imágen</Label>
              <Input
                id="src"
                onChange={handleValues}
                type="file"
                name="img"
                accept="image/*"
              />
            </FormGroup>
          </Form>
          <RightContainer>
            <ImgProducto
              src={preview || values.src || "/no-image.png"}
              alt="producto"
            />
          </RightContainer>
        </FormWrapper>
        <ButtonWrapper>
          <MutarButton
            onClick={value !== "add" ? onClickUpdate : onClickAdd}
            className={value !== "add" ? "update" : "agregar"}
          >
            {value !== "add" ? "Actualizar" : "Agregar"}
          </MutarButton>
        </ButtonWrapper>
      </ValuesContainer>
    </Modal>
  );
};

export default MutarProductos;
