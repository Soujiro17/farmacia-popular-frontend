import React from "react";
import styles from "./styles.module.css";
import Seleccion from "../../components/Seleccion";

const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <Seleccion />
    </div>
  );
};

export default Home;
