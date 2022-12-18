import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Inicio from "../pages/Inicio";
<<<<<<< HEAD
import FormPaciente from "../components/FormPaciente";
=======
import FormInicial from "../components/FormInicial";
import Productos from "../pages/Productos";
>>>>>>> ba1c5a346083171712139494fb0fd325726c8549

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario" element={<FormPaciente/>} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="*" element={<p>Página no encontrada</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
