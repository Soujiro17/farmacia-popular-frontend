import React from "react";
import HeaderLayout from "../../layouts/HeaderLayout/HeaderLayout";
import Tabla from "../../components/Tabla";
import { columnasProductos } from "../../data/columnasTabla";
import { datosProductos } from "../../data/datosTabla";

const Productos = () => {
  return (
    <HeaderLayout>
      <Tabla columns={columnasProductos} data={datosProductos} />
    </HeaderLayout>
  );
};

export default Productos;
