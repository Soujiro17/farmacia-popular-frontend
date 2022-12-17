import React from "react";
import styles from "./styles.module.css";
import Seleccion from "../../components/Seleccion";

const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <Seleccion />
      <img src="/img/icono.png" alt="Icono" className={styles.conteinerImg} />
    </div>
  );
};

export default Home;
