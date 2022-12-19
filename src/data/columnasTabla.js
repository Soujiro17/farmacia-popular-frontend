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

export const columnasOrden = [
  {
    id: "_id",
    name: "Código",
  },
  {
    id: "paciente",
    name: "Nombre",
    data: (row) => "".concat(row.paciente.nombre).concat(" ").concat(row.paciente.apellido),
  },
  {
    id: "comprador",
    name: "Comprador",
    data:(row) => row.paciente.nombreRepresentante,
  },
  {
    id:"detalle",
    name:"Direccion de entrega",
    data: (row)=> "".concat(row.paciente.direccion).concat(", ").concat(row.paciente.sector),
  },
  {
    id:"createdAt",
    name:"Fecha de Creacion"
  }

];
