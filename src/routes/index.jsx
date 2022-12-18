import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Inicio from "../pages/Inicio";
import FormPaciente from "../components/FormPaciente";
import Productos from "../pages/Productos";
import FormProducto from "../components/FormProductos";
import Ventas from "../pages/Ventas";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD

        <Route path="/formpaciente" element={<FormPaciente/>} />
=======
        <Route path="/formularioPaciente" element={<FormPaciente />} />
>>>>>>> 49a1209c27c883898efc0886d493cf246cfa87ca
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/ventas" element={<Ventas />} />
        <Route path="/formproducto" element={<FormProducto />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="*" element={<p>Página no encontrada</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
