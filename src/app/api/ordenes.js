export const getOrdenes = async ({ axiosInstance }) => {
  const { data } = await axiosInstance.get("/orden-de-compra/get-all-ordenes");

  return data;
};

export const addOrden = async ({ axiosInstance, values }) => {
  const { data } = await axiosInstance.post("/orden-de-compra/create", values);

  return data;
};
