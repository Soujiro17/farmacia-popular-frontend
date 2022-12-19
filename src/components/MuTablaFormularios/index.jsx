/* eslint-disable prefer-destructuring */
import React, { useState } from "react";
import { toast } from "react-toastify";
import { FcPlus} from "react-icons/fc";
import MTablaFormularios from "../MTablaFormularios";
import Input from "../../shared/Input";
import Label from "../../shared/Label";
import useUser from "../../hooks/useUser";
import usePreview from "../../hooks/usePreview";
import {
  Title,
  ValuesContainer,
  SubTitle,
  Form,


  FormGroup,
  FormWrapper,

} from "./style";


const initialValues = {
  descripcion: "",
  u_medida: "",
  cantidad: 0,
  posologia: "",
  stock: 0,
  src: "",

};


const MuTablaFormularios = ({ handleModal, value }) => {
  const [values, setValues] = useState(value === "add" ? initialValues : value);
const preview = usePreview();


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
    const value = e.target.value;

    

    setValues((prev) => ({ ...prev, [e.target.name]: value }));
  };

  return (
    <MTablaFormularios handleModal={handleModal} value={value}>
      <Title>{values.descripcion || "Encargado: "}</Title>
      <SubTitle>Formulario de compra {value.codigo || "  "}</SubTitle>
      <ValuesContainer>
        <FormWrapper>
          <Form>
            <FormGroup>
            <h3 htmlFor="Stock">Paciente</h3>  
            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 white:bg-gray-700 dark:border-gray-600 white:placeholder-gray-400 white:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Escoger paciente</option>
                <option value="US">United States</option>
                <option value="US">United States</option>
            </select>
            </FormGroup>
           
            <FormGroup>
              <Label htmlFor="rut">Rut</Label>
              <Input
                id="cantidad"
                name="cantidad"
                value={values.cantidad}
                onChange={handleValues}
              />
            </FormGroup>
            <FormGroup>

          

          
            <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
            style={{height: "40px", width : "250px"}}
            type="button"> Añadir otro  medicamento  <FcPlus className=""style={{height: "20px", width : "210px"}}/> </button>
              <h3 htmlFor="Stock">Medicamentos</h3>  
              <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 white:bg-gray-700 dark:border-gray-600 white:placeholder-gray-400 white:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Escoger medicamento</option>
                <option value="US">United States</option>
                <option value="US">United States</option>
            </select>
        
            </FormGroup>
           
          </Form>
          
        </FormWrapper>
        <Form>

      <div className="center-text" />
        <button className="bg-indigo-500
         text-white active:bg-indigo-600 
         text-xs font-bold uppercase px-3 py-1 rounded outline-none 
         focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"style={{height: "40px", width : "200px"}} 
         type="button" onClick={value !== "add" ? onClickUpdate : onClickAdd} >Generar boleta
         </button>
         {value !== "add" ? "Actualizar" : ""}
        </Form>
      </ValuesContainer>
    </MTablaFormularios>
  );
};

export default MuTablaFormularios;
