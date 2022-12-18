import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function Seleccion() {
  return (
    <div>
      <div className={styles.centerConteiner}>
        <div className={styles.line} />
        <div className={styles.groupButton}>
          <Link to="/formulario" className={styles.buttonForm}>
            Ingresar Pedido
          </Link>
          <Link to="/inicio" className={styles.buttonForm}>
            Visualizacion
          </Link>
        </div>
      </div>
    </div>
  );
}
