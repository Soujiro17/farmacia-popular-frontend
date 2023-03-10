import React from "react";
import "gridjs/dist/theme/mermaid.css";
import { Grid } from "gridjs-react";
import idiomaTabla from "../../data/idiomaTabla";

const Tabla = ({
  data = [],
  columns = [],
  disableSearch = false,
  pagination,
  width,
  disableAcciones = false,
}) => {
  let definitiveColumns = columns;

  if (!disableAcciones) {
    definitiveColumns = [...columns, { name: "Accion" }];
  }

  return (
    <Grid
      columns={definitiveColumns}
      data={data}
      search={!disableSearch}
      pagination={pagination}
      width={width}
      language={idiomaTabla}
      sort
    />
  );
};

export default Tabla;
