import styles from "./styles.module.css";

export default function FormPaciente() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.centerConteiner}>
        <div className={styles.wrapper}>
            <label>
              password
            </label>
            <select> 
              <default value="default">
                hola
              </default>
           <option value="hola">
              persona 1
           </option>
           <option value="hola">
              persona 2
           </option>
            </select>
        </div>
      </div>
   
    <img src="/img/icono.png" alt="Icono" className={styles.conteinerImg} />
  </div>
  



  )


}
