export const getProductos = async ({ axiosInstance }) => {
  const { data } = await axiosInstance.get("/producto/get-all-productos");

  return data;
};

export const addProducto = async ({ axiosInstance, values }) => {
  const { data } = await axiosInstance.post("/producto/create", values);

  return data;
};

export const updateProducto = async ({ axiosInstance, values, id }) => {
  const { data } = await axiosInstance.put(`/producto/update/${id}`, values);

  return data;
};

export const deleteProducto = async ({ axiosInstance, id }) => {
  const { data } = await axiosInstance.delete(`/producto/delete/${id}`);

  return data;
};
