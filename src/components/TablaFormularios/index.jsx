
import { FcPlus} from "react-icons/fc";

import { useState } from "react";
import { HiOutlinePencilAlt,HiOutlineTrash} from "react-icons/hi";
import FondoFormularios from "../FondoFormularios"
import MuTablaFormularios from "../MuTablaFormularios";
import HeaderLayout from "../../layouts/HeaderLayout/HeaderLayout";

export default function TablaFormularios() {



  const [selected, setSelected] = useState("");


  const handleModal = (value) => setSelected(value);
  return (
    <FondoFormularios>
      <HeaderLayout>
      <section className="py-1 bg-blueGray-50">
<div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
    <div className="rounded-t mb-0 px-4 py-3 border-0">
      <div className="flex flex-wrap items-center">
        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 className="font-semibold text-base text-blueGray-700">Datos del comprador</h3>

        </div>
        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
        
        <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => handleModal("add")} >   <FcPlus/> </button>
      
      
      {selected && (
        <MuTablaFormularios handleModal={handleModal} value={selected} />
      )}


        </div>
      </div>
    </div>

    <div className="block w-full overflow-x-auto">
      <table className="items-center bg-transparent w-full border-collapse ">
        <thead>
          <tr>
            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Código
                        </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Comprador
                        </th>
           <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Paciente
                        </th>
          <th className=" px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Acciones
                        </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Detalle
                        </th>

                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Boleta
                        </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
              1
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
           Brenda Araya
            
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
            Angel Araya
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <button className="bg-indigo-500 align-middle  text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">  <HiOutlinePencilAlt/> </button>
            <button className="bg-indigo-500 align-middle  text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">  <HiOutlineTrash/> </button>
            <i className="fas fa-arrow-up text-emerald-500 mr-4" />
              
              
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
            <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Ver</button>
            </td>
            <td>            
              <button className="bg-indigo-500 align-middle  text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Generar boleta</button>

            </td>
          </tr>
         
         
        
        </tbody>

      </table>
    </div>
  </div>
</div>
<footer className="relative pt-8 pb-6 mt-16">
  <div className="container mx-auto px-4">
    
    <div className="flex flex-wrap items-center md:justify-between justify-center">
   
      <div className="w-full md:w-6/12 px-4 mx-auto text-center" />
    </div>
  </div>
</footer>
</section>



      


          <div className="flex justify-center items-end h-2/4 pb-10" />
          </HeaderLayout>
      
    </FondoFormularios>
  



  )


}