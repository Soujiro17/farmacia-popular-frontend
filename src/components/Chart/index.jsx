import React from "react";
// eslint-disable-next-line import/no-unresolved
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels,
);

const Chart = ({
  height,
  width,
  labels,
  datasets: datasetsReceived,
  titleText,
  xLabel = undefined,
  yLabel = undefined,
  minX = undefined,
  minY = undefined,
  maxX = undefined,
  maxY = undefined,
  type,
  colores,
  id,
  legendLabelsSize = 15,
  titleSize = 12,
  xLabelSize = 11,
  xTicksSize = 8,
  yLabelSize = 11,
  yTicksSize = 8,
}) => {
  const options = {
    responsive: true,
    // animation: false,
    // hover: {
    // animationDuration: 0, // duration of animations when hovering an item
    // },
    // responsiveAnimationDuration: 0, // animation duration after a resize
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: legendLabelsSize,
          },
        },
      },
      title: {
        display: true,
        text: titleText,
        font: {
          size: titleSize,
        },
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: xLabel,
          font: {
            size: xLabelSize,
          },
        },
        ticks: {
          font: {
            size: xTicksSize,
          },
        },
        min: minX,
        max: maxX,
      },
      y: {
        display: true,
        title: {
          display: true,
          text: yLabel,
          font: {
            size: yLabelSize,
          },
        },
        ticks: {
          font: {
            size: yTicksSize,
          },
        },
        min: minY,
        max: maxY,
      },
    },
  };

  const data = {
    labels,
    datasets:
      typeof datasetsReceived[0] === "object"
        ? datasetsReceived.map((dataset, index) => {
            return {
              label: "# de pedidos",
              data: dataset,
              borderColor: colores[index],
              backgroundColor: colores[index],
              borderWidth: 1,
            };
          })
        : [
            {
              label: "# de pedidos",
              data: datasetsReceived,
              borderColor: colores,
              backgroundColor: colores,
              borderWidth: 1,
            },
          ],
  };

  // if (type === "line")
  //   return (
  //     <Line
  //       className="grafico"
  //       height={height}
  //       width={width}
  //       options={options}
  //       data={data}
  //       id={id}
  //     />
  //   );

  if (type === "donut")
    return (
      <Doughnut
        className="grafico"
        height={height}
        width={width}
        options={options}
        data={data}
        id={id}
      />
    );

  return <p>Gráfico no cargado</p>;
};

export default Chart;
