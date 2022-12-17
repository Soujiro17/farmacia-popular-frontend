import styles from "./styles.module.css";

export default function Seleccion() {
  return (
    <div>
      <div className={styles.centerConteiner}>
        <div className={styles.line} />
        <div className={styles.groupButton}>
          <button type="button">Ingresar pedido</button>
          <button type="button">Visualizacion</button>
        </div>
      </div>
    </div>
  );
}
