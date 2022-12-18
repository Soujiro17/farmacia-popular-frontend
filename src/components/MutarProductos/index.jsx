/* eslint-disable prefer-destructuring */
import React, { useState } from "react";
import { toast } from "react-toastify";
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
  descripcion: "",
  u_medida: "",
  cantidad: 0,
  posologia: "",
  stock: 0,
  src: "",
  img: null,
};

const MutarProductos = ({ handleModal, value }) => {
  const [values, setValues] = useState(value === "add" ? initialValues : value);

  const preview = usePreview(values.img);

  const { updateProducto, addProducto } = useUser();

  const onClickUpdate = () => {
    updateProducto(values);
    toast.success("Producto actualizado con éxito");
  };

  const onClickAdd = () => {
    const finalValue = { ...values, src: preview };

    addProducto(finalValue);
    toast.success("Producto añadido con éxito");
  };

  const handleValues = (e) => {
    let value = e.target.value;

    if (e.target.name === "img") {
      value = e.target.files;
    }

    setValues((prev) => ({ ...prev, [e.target.name]: value }));
  };

  return (
    <Modal handleModal={handleModal} value={value}>
      <Title>{values.descripcion || "Nombre producto"}</Title>
      <SubTitle>Código: {value.codigo || "Código producto"}</SubTitle>
      <ValuesContainer>
        <FormWrapper>
          <Form>
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
              <Label htmlFor="u_medida">Unidad de medida</Label>
              <Input
                id="u_medida"
                name="u_medida"
                value={values.u_medida}
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
              <Label htmlFor="Stock">Stock</Label>
              <Input
                id="Stock"
                name="stock"
                value={values.stock}
                onChange={handleValues}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="posologia">Posología</Label>
              <Input
                id="posologia"
                name="posologia"
                value={values.posologia}
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
