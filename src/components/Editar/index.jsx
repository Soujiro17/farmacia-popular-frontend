import FondoFormularios from "../FondoFormularios";

export default function Editar() {
    
    return (


<FondoFormularios>
      <div className="h-screen flex justify-center  items-center">
        <div className="bg-white h-[95vh] w-2/4  rounded-2xl overflow-auto">
          <h1 className="text-center p-10 text-4xl text-bold">Editar paciente</h1>
          <form className="p-20 h-full">
          <div className=" mb-4 md:flex md:justify-center">
								<div className="mb-4 md:mr-2 md:mb-0 ">
									<label className="block mb-2 text-2xl font-bold text-black" htmlFor="Nombre">
										Nombre
									
									<input
										className="w-full px-3 py-2 text-2xl leading-tight bg-gray-200 text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:outline-cyan-500"
										id="Nombre"
										type="text"
										placeholder="Nombre"
									/></label>
								</div>
								<div className="md:ml-2">
									<label className="block mb-2 text-2xl font-bold text-black" htmlFor="Apellido">
										Apellido
									
									<input
										className="w-full px-3 py-2 text-2xl leading-tight bg-gray-200 text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:outline-cyan-500"
										id="Apellido"
										type="text"
										placeholder="Apellido"
									/></label>
								</div>       
							</div>
              
              <div className=" mb-4 md:flex md:justify-center">
								<div className="mb-4 md:mr-2 md:mb-0 ">
									<label className="block mb-2 text-2xl font-bold text-black" htmlFor="Rut">
										Rut
									
									<input
										className="w-full px-3 py-2 text-2xl leading-tight bg-gray-200 text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:outline-cyan-500"
										id="Rut"
										type="text"
										placeholder="Rut"
									/></label>
								</div>
								<div className="md:ml-2">
									<label className="block mb-2 text-2xl font-bold text-black" htmlFor="Email">
										Email
									
									<input
										className="w-full px-3 py-2 text-2xl leading-tight bg-gray-200 text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:outline-cyan-500"
										id="Email"
										type="text"
										placeholder="Email"
									/></label>
								</div>
							</div>
              
              <div className=" mb-4 md:flex md:justify-center">
								<div className="mb-4 md:mr-2 md:mb-0 ">
									<label className="block mb-2 text-2xl font-bold text-black" htmlFor="Sector">
										Sector
									
									<input
										className="w-full px-3 py-2 text-2xl leading-tight bg-gray-200 text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:outline-cyan-500"
										id="Sector"
										type="text"
										placeholder="Sector"
									/></label>
								</div>
								<div className="md:ml-2">
									<label className="block mb-2 text-2xl font-bold text-black" htmlFor="Direccion">
										Direccion
									
									<input
										className="w-full px-3 py-2 text-2xl leading-tight text-black border bg-gray-200 rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:outline-cyan-500"
										id="Direccion"
										type="text"
										placeholder="Direccion"
									/></label>
								</div>
							</div>

              <div className=" mb-4 md:flex md:justify-center">
								<div className="mb-4 md:mr-2 md:mb-0 ">
									<label className="block mb-2 text-2xl font-bold text-black" htmlFor="Rut_rep">
										Rut de Representante
									
									<input
										className="w-full px-3 py-2 text-2xl leading-tight text-black border bg-gray-200 rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:outline-cyan-500"
										id="Rut_rep"
										type="text"
										placeholder="Rute de Representante"
									/></label>
								</div>
								<div className="md:ml-2">
									<label className="block mb-2 text-2xl font-bold text-black" htmlFor="Nombre_rep">
										Nombre de Representante
									
									<input
										className="w-full px-3 py-2 text-2xl leading-tight text-black border bg-gray-200 rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:outline-cyan-500"
										id="Nombre_rep"
										type="text"
										placeholder="Nombre de Representante"
									/></label>
								</div>
							</div>
              <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xl font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 active:scale-90" type="button">Guardar cambios</button>
          </form>
        </div>
      </div>
    </FondoFormularios>

    )

}