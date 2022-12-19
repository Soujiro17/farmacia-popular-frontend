import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Inicio from "../pages/Inicio";
import FormPaciente from "../components/FormPaciente";
import Productos from "../pages/Productos";
import FormProducto from "../components/FormProductos";
import Ventas from "../pages/Ventas";
import Clientes from "../pages/Clientes";
import NoEncontrado from "../pages/NoEncontrado";
import TablaFormularios from "../components/TablaFormularios";
import Login from "../pages/Login";
import Editar from "../components/Editar";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/editar" element={<Editar />}/>

        <Route path="/orden-compra" element={<Home />} />
        <Route path="/" element={<Login />} />

        <Route path="/formpaciente" element={<FormPaciente />} />
        <Route path="/ordencompra" element={<TablaFormularios />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/ventas" element={<Ventas />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/formproducto" element={<FormProducto />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="*" element={<NoEncontrado />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
