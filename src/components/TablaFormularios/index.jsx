import { FcPlus } from "react-icons/fc";

// import { useEffect, useState } from "react";
// import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";
// import FondoFormularios from "../FondoFormularios";
// import MuTablaFormularios from "../MuTablaFormularios";
// import HeaderLayout from "../../layouts/HeaderLayout/HeaderLayout";
// import useUser from "../../hooks/useUser";
//tabla vicho
import React, { useEffect, useState } from "react";
import { _ } from "gridjs-react";
import HeaderLayout from "../../layouts/HeaderLayout/HeaderLayout";
import Tabla from "../../components/Tabla";
import { columnasOrden } from "../../data/columnasTabla";
import { AgregarProducto, ButtonContainer } from "./style";
import useUser from "../../hooks/useUser";
import AccionesTabla from "../../components/AccionesTabla";
import MuTablaFormularios from "../MuTablaFormularios";

export default function TablaFormularios() {
  const { ordenes ,addOrden} = useUser();

  const [selected, setSelected] = useState("");
  const [data, setData] = useState(ordenes);

  const handleModal = (value) => setSelected(value);

  const onRemove = (id) => {
    if (!window.confirm("Deseas eliminar este registro?")) return;

    removeProducto(id);
  };

  const onGo = (id) => alert("handling modal", id);
  const onEdit = (value) => handleModal(value);

  useEffect(() => {
    
    setData(() => {
      return Object.entries(ordenes)?.map(([, value]) => {
        return {
          ...value,
          accion: _(
            <AccionesTabla
              onRemove={() => onRemove(value._id)}
              onEdit={() => onEdit(value)}
              onGo={() => onGo(value._id)}
            />,
          ),
        };
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ordenes]);



  return (
    <HeaderLayout>
    <Tabla columns={columnasOrden} data={data} pagination />
    <ButtonContainer>
      <AgregarProducto onClick={() => handleModal("add")}>
        + Crear Orden de compra
      </AgregarProducto>
    </ButtonContainer>
    {selected && (
      <MuTablaFormularios handleModal={handleModal} value={selected}></MuTablaFormularios>
    )}
  </HeaderLayout>

    //<FondoFormularios>
     
      //</FondoFormularios><HeaderLayout>
      //</HeaderLayout><Tabla columns={columnasProductos} data={data} pagination />
      //{selected && (
      // <MutarProductos handleModal={handleModal} value={selected} />
      //)}

       
  );
}
