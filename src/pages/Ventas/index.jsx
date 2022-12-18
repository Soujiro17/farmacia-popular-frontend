/* eslint-disable array-callback-return */
import React, { useMemo } from "react";
import HeaderLayout from "../../layouts/HeaderLayout/HeaderLayout";
import Tabla from "../../components/Tabla";
import { columnasVentas } from "../../data/columnasTabla";
import { datosVentas } from "../../data/datosTabla";
import { EstadoContainer, PedidosEstados } from "./style";

const Ventas = () => {
  const estados = useMemo(() => {
    const estadosTemp = {
      preparacion: 0,
      despacho: 0,
      transito: 0,
    };

    datosVentas.map((venta) => {
      if (venta.estado === "En tránsito") {
        estadosTemp.transito += 1;
      } else if (venta.estado === "En despacho") {
        estadosTemp.despacho += 1;
      } else {
        estadosTemp.preparacion += 1;
      }
    });

    return estadosTemp;
  }, []);

  return (
    <HeaderLayout>
      <PedidosEstados>
        <EstadoContainer>
          En preparación{" "}
          <span className="preparacion">{estados.preparacion}</span>
        </EstadoContainer>
        <EstadoContainer>
          En despacho <span className="despacho">{estados.despacho}</span>
        </EstadoContainer>
        <EstadoContainer>
          En tránsito <span className="transito">{estados.transito}</span>
        </EstadoContainer>
      </PedidosEstados>
      <Tabla columns={columnasVentas} data={datosVentas} disableAcciones />
    </HeaderLayout>
  );
};

export default Ventas;
