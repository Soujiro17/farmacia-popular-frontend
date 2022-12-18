import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Inicio from "../pages/Inicio";
import FormPaciente from "../components/FormPaciente";
import Productos from "../pages/Productos";
import FormProducto from "../components/FormProductos";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario" element={<FormPaciente />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/formproducto" element={<FormProducto />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="*" element={<p>Página no encontrada</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
