import React from "react";
import GrayCard from "../GrayCard";
import Chart from "../Chart";

const labels = ["En preparación", "En despacho", "En tránsito"];
const datasets = [10, 6, 15];
const colores = [
  "rgb(253, 255, 110)",
  "rgb(140, 255, 130)",
  "rgb(255, 71, 71)",
];

const EstadosProductos = () => {
  return (
    <GrayCard gridArea="estados">
      <Chart
        type="donut"
        labels={labels}
        datasets={datasets}
        colores={colores}
        id={1}
        titleText="Estado de los pedidos"
        titleSize="20"
        height="100%"
        width="30px"
      />
    </GrayCard>
  );
};

export default EstadosProductos;
