import React from "react";
import "gridjs/dist/theme/mermaid.css";
import { useNavigate } from "react-router-dom";
import { Grid, _ } from "gridjs-react";
import idiomaTabla from "../../data/idiomaTabla";
import AccionesTabla from "../AccionesTabla";

const Tabla = ({
  data = [],
  columns = [],
  disableSearch,
  pagination,
  width,
}) => {
  const definitiveColumns = [...columns, { name: "Accion" }];

  const navigate = useNavigate();

  const definitiveData = Object.entries(data)?.map(([, value]) => {
    return {
      ...value,
      accion: _(<AccionesTabla value={value} navigate={navigate} />),
    };
  });

  return (
    <Grid
      columns={definitiveColumns}
      data={definitiveData}
      search={!disableSearch}
      pagination={pagination}
      width={width}
      language={idiomaTabla}
      sort
    />
  );
};

export default Tabla;
