/* eslint-disable prefer-template */
/* eslint-disable no-underscore-dangle */
/* eslint-disable array-callback-return */
import React, { useMemo } from "react";
import HeaderLayout from "../../layouts/HeaderLayout/HeaderLayout";
import Tabla from "../../components/Tabla";
import { columnasVentas } from "../../data/columnasTabla";
import { EstadoContainer, PedidosEstados } from "./style";
import useUser from "../../hooks/useUser";

const Ventas = () => {
  const { ordenes } = useUser();

  const parsedOrdenes = useMemo(() => {
    return ordenes.map((orden) => ({
      _id: orden._id,
      vendedor: orden.encargado.nombre,
      estado: orden.estado,
      medicamentos: orden.medicamentos
        .map((medicamento) => medicamento?.idProducto?.nombre || "Abrilar")
        .join(" - "),
      paciente: orden.paciente.nombre + " " + orden.paciente.nombre,
      total: Math.floor(Math.random() * (30000 - 5990 + 1) + 5990),
    }));
  }, [ordenes]);

  const estados = useMemo(() => {
    const estadosTemp = {
      preparacion: 0,
      despacho: 0,
      transito: 0,
      entregado: 0,
    };

    parsedOrdenes.map((venta) => {
      if (venta.estado === 0) {
        estadosTemp.preparacion += 1;
      } else if (venta.estado === 1) {
        estadosTemp.despacho += 1;
      } else if (venta.estado === 2) {
        estadosTemp.transito += 1;
      } else {
        estadosTemp.entregado += 1;
      }
    });

    return estadosTemp;
  }, [parsedOrdenes]);

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
        <EstadoContainer>
          Entregado <span className="entregado">{estados.entregado}</span>
        </EstadoContainer>
      </PedidosEstados>
      <Tabla columns={columnasVentas} data={parsedOrdenes} disableAcciones />
    </HeaderLayout>
  );
};

export default Ventas;
