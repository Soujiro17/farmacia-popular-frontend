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
    id: "_id",
    name: "Nro. de venta",
  },
  {
    id: "estado",
    name: "Estado",
    data: (row) => {
      if (row.estado === 0) {
        return "En preparación";
      }
      if (row.estado === 1) {
        return "En despacho";
      }
      if (row.estado === 2) {
        return "En tránsito";
      }
      return "Entregado";
    },
  },
  {
    id: "paciente",
    name: "Paciente",
  },
  {
    id: "vendedor",
    name: "Vendedor",
  },
  {
    id: "medicamentos",
    name: "Medicamentos",
  },
  {
    id: "total",
    name: "Total",
    data: (row) => "$".concat(row.total.toLocaleString("es-CL")),
  },
];

export const columnasOrden = [
  {
    id: "_id",
    name: "Código",
  },
  {
    id: "paciente",
    name: "Nombre",
    data: (row) =>
      "".concat(row.paciente.nombre).concat(" ").concat(row.paciente.apellido),
  },
  {
    id: "comprador",
    name: "Comprador",
    data: (row) => row.paciente.nombreRepresentante,
  },
  {
    id: "detalle",
    name: "Direccion de entrega",
    data: (row) =>
      ""
        .concat(row.paciente.direccion)
        .concat(", ")
        .concat(row.paciente.sector),
  },
  {
    id: "createdAt",
    name: "Fecha de Creacion",
  },
];
