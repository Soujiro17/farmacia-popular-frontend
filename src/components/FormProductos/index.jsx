import styles from "./styles.module.css";

export default function FormProducto() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.centerConteiner}>
        <form className={styles.formulario} />
      </div>
      <img src="/img/icono.png" alt="Icono" className={styles.conteinerImg} />
    </div>
  );
}
