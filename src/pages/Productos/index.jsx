/* eslint-disable no-underscore-dangle */
/* eslint-disable no-alert */
import React, { useEffect, useState } from "react";
import { _ } from "gridjs-react";
import HeaderLayout from "../../layouts/HeaderLayout/HeaderLayout";
import Tabla from "../../components/Tabla";
import { columnasProductos } from "../../data/columnasTabla";
import { AgregarProducto, ButtonContainer } from "./style";
import useUser from "../../hooks/useUser";
import MutarProductos from "../../components/MutarProductos";
import AccionesTabla from "../../components/AccionesTabla";

const Productos = () => {
  const { productos, removeProducto } = useUser();

  const [selected, setSelected] = useState("");
  const [data, setData] = useState(productos);

  const handleModal = (value) => setSelected(value);

  const onRemove = (id) => {
    if (!window.confirm("Deseas eliminar este registro?")) return;

    removeProducto(id);
  };

  const onGo = (id) => alert("handling modal", id);
  const onEdit = (value) => handleModal(value);

  useEffect(() => {
    setData(() => {
      return Object.entries(productos)?.map(([, value]) => {
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
  }, [productos]);

  return (
    <HeaderLayout>
      <Tabla columns={columnasProductos} data={data} pagination />
      <ButtonContainer>
        <AgregarProducto onClick={() => handleModal("add")}>
          + Añadir producto
        </AgregarProducto>
      </ButtonContainer>
      {selected && (
        <MutarProductos handleModal={handleModal} value={selected} />
      )}
    </HeaderLayout>
  );
};

export default Productos;
