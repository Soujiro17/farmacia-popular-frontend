import React from "react";
import Seleccion from "../../components/Seleccion";
import FondoFormularios from "../../components/FondoFormularios";

const Home = () => {
  return (
    <FondoFormularios>
      <Seleccion />
      <img
        src="/img/icono.png"
        alt="Icono"
        className="absolute top-[80%] scale-50"
      />
    </FondoFormularios>
  );
};

export default Home;
