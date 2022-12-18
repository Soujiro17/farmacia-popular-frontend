import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function Seleccion() {
  return (
        <div className="h-screen   grid  place-items-center">
    <div className="bg-gray-500 h-3/4 w-2/4  rounded-2xl bg-opacity-50  grid-rows-2 grid-cols-1">
        <div className="flex justify-center items-end h-2/4 pb-10">
          <Link to="/formpaciente" className="text-lg border flex-none w-2/4 text-center bg-white hover:bg-gray-300 rounded-md hover:border-black h-8 hover:scale-105">
            Ingresar Pedido
          </Link>
          </div>
          <div className="flex justify-center items-start h-2/4 ">
          <Link to="/inicio" className=" text-lg border flex-none w-2/4 text-center bg-white hover:bg-gray-300 rounded-md hover:border-black h-8 hover:scale-105 ">
            Visualizacion
          </Link>
          </div>
      </div>
      </div>
  
  );
}
