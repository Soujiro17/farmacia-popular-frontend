import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function Seleccion() {
  return (
    <div>
      <div className={styles.centerConteiner}>
        <div className={styles.line} />
        <div className={styles.groupButton}>
          <Link to="/formulario" className={styles.buttonForm}>
            AAAA
          </Link>
          <button type="button">Visualizacion</button>
        </div>
      </div>
    </div>
  );
}
