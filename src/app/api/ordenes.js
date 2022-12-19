export const getOrdenes = async ({ axiosInstance }) => {
  const { data } = await axiosInstance.get("");

  return data;
};

export const addOrden = async ({ axiosInstance, values }) => {
  const { data } = await axiosInstance.post("", values);

  return data;
};
