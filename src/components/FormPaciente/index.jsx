import FondoFormularios from "../../components/FondoFormularios";
import { useState } from "react";

import { toast } from "react-toastify";
import useUser from "../../hooks/useUser";
export default function FormPaciente() {
  const [data,setData] = useState()
  const {addPaciente} = useUser()

  const handleChange = (e)=>{	
	
	setData((prev)=>({...prev,[e.target.name]:e.target.value}));


  }

  const onSubmit = (e) =>{
	e.preventDefault()
	addPaciente(data)
	
  }
	return (
    <FondoFormularios>
      <div className="h-screen flex justify-center  items-center">
        <div className="bg-white h-[95vh] w-2/4  rounded-2xl overflow-auto">
          <h1 className="text-center p-10 text-4xl text-bold">Ficha de ingreso de paciente</h1>
          <form className="p-20 h-full" onSubmit={onSubmit} >
          <div class=" mb-4 md:flex md:justify-center" >
								<div class="mb-4 md:mr-2 md:mb-0 ">
									<label class="block mb-2 text-2xl font-bold text-black" for="Nombre">
										Nombre
									</label>
									<input
										class="w-full px-3 py-2 text-2xl leading-tight bg-gray-200 text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:outline-cyan-500"
										name="nombre"
										onChange={handleChange}
										type="text"
										placeholder="Nombre"
									/>
								</div>
								<div class="md:ml-2">
									<label class="block mb-2 text-2xl font-bold text-black" for="Apellido">
										Apellido
									</label>
									<input
										class="w-full px-3 py-2 text-2xl leading-tight bg-gray-200 text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:outline-cyan-500"
										name="apellido"
										onChange={handleChange}
										type="text"
										placeholder="Apellido"
									/>
								</div>       
							</div>
              
              <div class=" mb-4 md:flex md:justify-center">
								<div class="mb-4 md:mr-2 md:mb-0 ">
									<label class="block mb-2 text-2xl font-bold text-black" for="Rut">
										Rut
									</label>
									<input
										class="w-full px-3 py-2 text-2xl leading-tight bg-gray-200 text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:outline-cyan-500"
										name="rut"
										onChange={handleChange}
										type="text"
										placeholder="Rut"
									/>
								</div>
								<div class="md:ml-2">
									<label class="block mb-2 text-2xl font-bold text-black" for="Email">
										Email
									</label>
									<input
										class="w-full px-3 py-2 text-2xl leading-tight bg-gray-200 text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:outline-cyan-500"
										name="email"
										onChange={handleChange}
										type="text"
										placeholder="Email"
									/>
								</div>
							</div>
              
              <div class=" mb-4 md:flex md:justify-center">
								<div class="mb-4 md:mr-2 md:mb-0 ">
									<label class="block mb-2 text-2xl font-bold text-black" for="Sector">
										Sector
									</label>
									<input
										class="w-full px-3 py-2 text-2xl leading-tight bg-gray-200 text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:outline-cyan-500"
										name="sector"
										onChange={handleChange}
										type="text"
										placeholder="Sector"
									/>
								</div>
								<div class="md:ml-2">
									<label class="block mb-2 text-2xl font-bold text-black" for="Direccion">
										Direccion
									</label>
									<input
										class="w-full px-3 py-2 text-2xl leading-tight text-black border bg-gray-200 rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:outline-cyan-500"
										name="direccion"
										onChange={handleChange}
										type="text"
										placeholder="Direccion"
									/>
								</div>
							</div>

              <div class=" mb-4 md:flex md:justify-center">
								<div class="mb-4 md:mr-2 md:mb-0 ">
									<label class="block mb-2 text-2xl font-bold text-black" for="Rut_rep">
										Rut de Representante
									</label>
									<input
										class="w-full px-3 py-2 text-2xl leading-tight text-black border bg-gray-200 rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:outline-cyan-500"
										name="rutRepresentante"
										onChange={handleChange}
										type="text"
										placeholder="Rute de Representante"
									/>
								</div>
								
								<div class="md:ml-2">
									<label class="block mb-2 text-2xl font-bold text-black" for="Nombre_rep">
										Nombre de Representante
									</label>
									<input
										class="w-full px-3 py-2 text-2xl leading-tight text-black border bg-gray-200 rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:outline-cyan-500"
										name="nombreRepresentante"
										onChange={handleChange}
										type="text"
										placeholder="Nombre de Representante"
									/>
								</div>
							</div>
							<div class=" mb-4 md:flex md:justify-start">
							<div class="md:ml-2">
									<label class="block mb-2 text-2xl font-bold text-black" for="Telefono">
										Telefono
									</label>
									<input
										class="w-30 px-3 py-2 text-2xl leading-tight text-black border bg-gray-200 rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:outline-cyan-500"
										name="telefono"
										onChange={handleChange}
										type="text"
										placeholder="Telefono"
									/>
								</div>
								</div>
              <button class="bg-indigo-500 text-white active:bg-indigo-600 text-xl font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 active:scale-90" type="submit">Generar boleta</button>
          </form>
        </div>
      </div>
    </FondoFormularios>
  );
}
