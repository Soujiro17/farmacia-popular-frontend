export const columnasProductos = [
  {
    id: "_id",
    name: "Código",
  },
  {
    id: "nombre",
    name: "Nombre",
  },
  {
    id: "descripcion",
    name: "Descripción",
  },
  {
    id: "cantidad",
    name: "Cantidad",
  },

  {
    id: "necesitaReceta",
    name: "Necesita receta",
    data: (row) => (row.necesitaReceta ? "Sí" : "No"),
  },
  {
    id: "valor",
    name: "Valor",
    data: (row) => "$".concat(row.valor.toLocaleString("es-CL")),
  },
];

export const columnasVentas = [
  {
    id: "id",
    name: "Nro. de venta",
  },
  {
    id: "estado",
    name: "Estado",
  },
  {
    id: "cliente",
    name: "Cliente",
  },
  {
    id: "paciente",
    name: "Paciente",
  },
  {
    id: "total",
    name: "Total",
    data: (row) => "$".concat(row.total.toLocaleString("es-CL")),
  },
];
