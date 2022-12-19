import React, { useState, createContext, useMemo } from "react";
import { datosProductos } from "../data/datosTabla";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [productos, setProductos] = useState(datosProductos);

  const removeProducto = (id) => {
    /* axios.delete() */
    setProductos((prev) => prev.filter((item) => item.id !== id));
  };

  const addProducto = (value) => {
    /* axios.post() */

    setProductos((prev) => [...prev, { ...value, id: productos.length + 1 }]);
  };

  const updateProducto = (value) => {
    /* axios.update() */
    setProductos((prev) =>
      prev.map((item) => {
        if (item.id === value.id) return value;
        return item;
      }),
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

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserProvider;
