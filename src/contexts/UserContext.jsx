/* eslint-disable no-underscore-dangle */
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState, createContext, useMemo } from "react";
import { toast } from "react-toastify";
// producto
import {
  addProducto as agregarProducto,
  updateProducto as actualizarProducto,
  deleteProducto as eliminarProducto,
  getProductos,
} from "../app/api/productos";
// orden
import { addOrden as agregarOrden, getOrdenes } from "../app/api/ordenes";

import {
  addPaciente as agregarPaciente,
  getPacientes,
} from "../app/api/pacientes";

import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { datosProductos, datosVentas } from "../data/datosTabla";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [ordenes, setOrdenes] = useState([]);
  const [pacientes, setPacientes] = useState([]);

  const axiosPrivate = useAxiosPrivate();

  /* ***************** Paciente CRUD ***************** */
  const paciente = useMutation(({ type, ...rest }) => {
    // { type: 'hola', value: { nombreOrden: "", cliente: ""}, nombre: }
    // rest = { value: { nombreOrden: "", cliente: ""}, nombre }
    const datos = { axiosInstance: axiosPrivate, ...rest };

    if (type === "add") {
      return agregarPaciente(datos);
    }

    return null;
  });

  const addPaciente = (values) => {
    paciente.mutate(
      { type: "add", values },
      {
        onSuccess: () => {
          setPacientes((prev) => [...prev, values]);
          toast.success("Paciente agregado con exito");
        },
        onError: () => toast.error("Error al ingresar paciente"),
      },
    );
  };

  /* ***************** Orden CRUD ***************** */

  const orden = useMutation(({ type, ...rest }) => {
    // { type: 'hola', value: { nombreOrden: "", cliente: ""}, nombre: }
    // rest = { value: { nombreOrden: "", cliente: ""}, nombre }
    const datos = { axiosInstance: axiosPrivate, ...rest };

    if (type === "add") {
      return agregarOrden(datos);
    }

    return null;
  });

  const addOrden = (values) => {
    orden.mutate(
      { type: "add", values },
      {
        onSuccess: () => {
          setOrdenes((prev) => [...prev, values]);
          toast.success("Orden de compra creada con éxito");
        },
        onError: () => toast.error("Error al crear la orden de compra"),
      },
    );
  };

  /* ***************** PRODUCTOS CRUD ***************** */

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

      // ordenes
      ordenes,
      addOrden,

      // pacientes
      pacientes,
      addPaciente,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [productos, ordenes, pacientes],
  );

  // get Pacientes
  const { isLoading: isLoadingPacientes } = useQuery(
    ["pacientes"],
    () => getPacientes({ axiosInstance: axiosPrivate }),
    {
      onSuccess: (data) => setPacientes(data.pacientes),
    },
  );

  // Get Productos useQuery(id_único_peticion, función_a_llamar, opciones)
  const { isLoading: isLoadingOrders } = useQuery(
    ["ordenes"],
    () => getOrdenes({ axiosInstance: axiosPrivate }),
    {
      onSuccess: (data) => setOrdenes(data.productos),
      onError: () => setOrdenes(datosVentas),
    },
  );

  // get para productos
  const { isLoading: isLoadingProducts } = useQuery(
    ["productos"], // Siempre con llaves el id de los datos de la petición: ["hola"] o ["hola", "2"] o ["hola", {hola: 1}]...
    () => getProductos({ axiosInstance: axiosPrivate }),
    {
      onSuccess: (data) => setProductos(data.productos),
      onError: () => setProductos(datosProductos),
    },
  );
  if (isLoadingProducts && isLoadingOrders && isLoadingPacientes)
    return <p>Loading...</p>;

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserProvider;
