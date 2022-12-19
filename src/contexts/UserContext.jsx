/* eslint-disable no-underscore-dangle */
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState, createContext, useMemo } from "react";
import { toast } from "react-toastify";
import {
  addProducto as agregarProducto,
  updateProducto as actualizarProducto,
  deleteProducto as eliminarProducto,
  getProductos,
} from "../app/api/productos";
// import { datosProductos } from "../data/datosTabla";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  const axiosPrivate = useAxiosPrivate();

  const producto = useMutation(({ type, ...rest }) => {
    const datos = { axiosInstance: axiosPrivate, ...rest };

    if (type === "add") {
      return agregarProducto(datos);
    }
    if (type === "delete") {
      return eliminarProducto(datos);
    }

    return actualizarProducto(datos);
  });

  const removeProducto = (id) => {
    producto.mutate(
      { id, type: "delete" },
      {
        onSuccess: () => {
          setProductos((prev) => prev.filter((item) => item._id !== id));
          toast.success("Producto eliminado con éxito");
        },
        onError: () => toast.error("Error al eliminar el producto"),
      },
    );
  };

  const addProducto = ({ value, callBack }) => {
    producto.mutate(
      { values: value, type: "add" },
      {
        onSuccess: () => {
          setProductos((prev) => [
            ...prev,
            { ...value, id: productos.length + 1 },
          ]);
          callBack();
          toast.success("Producto añadido con éxito");
        },
        onError: () => toast.error("Error al crear el producto"),
      },
    );
  };

  const updateProducto = ({ value, callBack }) => {
    producto.mutate(
      { values: value, type: "update", id: value._id },
      {
        onSuccess: () => {
          setProductos((prev) =>
            prev.map((item) => {
              if (item._id === value._id) return value;
              return item;
            }),
          );
          callBack();
          toast.success("Producto actualizado con éxito");
        },
        onError: () => toast.error("Error al actualizar el producto"),
      },
    );
  };

  const values = useMemo(
    () => ({
      productos,
      removeProducto,
      addProducto,
      updateProducto,
      setProductos,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [productos],
  );

  const { isLoading } = useQuery(
    ["productos"],
    () => getProductos({ axiosInstance: axiosPrivate }),
    {
      onSuccess: (data) => setProductos(data.productos),
    },
  );

  if (isLoading) return <p>Loading...</p>;

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserProvider;
