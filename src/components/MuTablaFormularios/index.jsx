/* eslint-disable prefer-destructuring */
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FcPlus} from "react-icons/fc";
import MTablaFormularios from "../MTablaFormularios";
import useAuth from "../../hooks/useAuth";
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
  const {pacientes} = useUser();
  const {productos} = useUser();
  const [listaPacientes,setPacientes] = useState(pacientes)
  const [values, setValues] = useState(value === "add" ? initialValues : value);
  const [listaProductos] = useState(productos);
  const [listaSelects,setListaSelects] = useState([]);
  const { auth } = useAuth();
  const [medicamentos,setMedicamentos] = useState(); // productos/medicamentos que el cliente llevara
  const [cant,setCant] = useState(1);
  const [paciente, setPaciente] = useState();

  const anadirProducto = ()=>{
   
    setListaSelects([...listaSelects,<>
      <FormGroup>

<h3 htmlFor="Stock">Medicamentos</h3>  
<select name={cant} onChange={handleMedicamentos} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 white:bg-gray-700 dark:border-gray-600 white:placeholder-gray-400 white:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
<option selected>Escoger medicamento</option>
{listaProductos.map((value,index)=>{

return(
<>
<option value={value._id}> {value.nombre}</option>

</>
)
})}

</select>
{/* <input  name="cant" type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 white:bg-gray-700 dark:border-gray-600 white:placeholder-gray-400 white:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input> */}

</FormGroup> 

</>])
setCant(cant+1);
  }


  const preview = usePreview();
  

  const { addOrden } = useUser();

  const onClickUpdate = () => {
    // console.log("encargado: ", auth.user._id)
    // console.log("paciente: ",paciente )
    // console.log("medicamentos", medicamentos);
    //updateProducto(values);
    toast.success("Producto actualizado con éxito");
  };

  const onClickAdd = () => {
    let meds = []
    //Objtec.entries para iterar sobre un objeto
    Object.entries(medicamentos).map((val,index)=>{
      console.log(val[1])
      meds.push({
        cantidad:1,
        idProducto:val[1]
      })
    ;
    })
    let finalValue = {
      paciente:paciente,
      encargado:auth.user._id,
      medicamentos:meds
    }
    //addProducto(finalValue);
    addOrden(finalValue)
    toast.success("Producto añadido con éxito");
  };

  const handleValues = (e) => {
    const value = e.target.value;
    setValues((prev) => ({ ...prev, [e.target.name]: value }));
  };
  
  const handleMedicamentos = (e) => { 
    const value = e.target.value;
    setMedicamentos((prev)=>({...prev,[e.target.name]:value}));
    
  }

const handlePaciente = (e)=>{
  setPaciente(e.target.value);
}


  
  return (
    <MTablaFormularios handleModal={handleModal} value={value}>
      <Title>{values.descripcion || "Encargado: "}</Title>
      <SubTitle>Formulario de compra {value.codigo || "  "}</SubTitle>
      <ValuesContainer>
        <FormWrapper>
          <Form>
            
            <FormGroup>
              
            <h3 htmlFor="Stock">Pacientes</h3> 
            <select id="countries" onChange={handlePaciente} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 white:bg-gray-700 dark:border-gray-600 white:placeholder-gray-400 white:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option defaultValue="">Escoger paciente</option>
            {listaPacientes.map((value,index)=>{  
              return(
              <>
              <option value={value._id}>{value.nombre}</option>
              </>
              )
            })}
                
            </select>
            
            </FormGroup>
           
           
            {/* <FormGroup>
              <Label htmlFor="rut">Rut</Label>
              <Input
                id="cantidad"
                name="cantidad"
                value={values.cantidad}
                onChange={handleValues}
              />
            </FormGroup> */}
           
           {/*aqui va el select*/}
            {listaSelects}
            <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold mt-2 uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
            onClick={anadirProducto}
            style={{height: "40px", width : "250px"}}
            type="button"> Añadir otro  medicamento  <FcPlus className=""style={{height: "20px", width : "210px"}}/> </button>      
      
       
      

      <div className="center-text" />
        <button className="bg-indigo-500
         text-white active:bg-indigo-600 
         text-xs font-bold uppercase px-3 py-1 rounded outline-none 
         focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"style={{height: "40px", width : "200px"}} 
         type="button" onClick={value !== "add" ? onClickUpdate : onClickAdd} >Crear Orden
         </button>
         {value !== "add" ? "Actualizar" : ""}
        </Form>
         </FormWrapper>
      </ValuesContainer>
    </MTablaFormularios>
  );
};

export default MuTablaFormularios;
