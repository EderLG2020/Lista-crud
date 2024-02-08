function Formulario () {
  return(
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="w-1/2 lg:w-2/5 font-black text-3xl text-center">Seguimiento paciente</h2>
      <p className="text-lg mt-5">
        Añade pacientes y {''} 
        <span className="text-indigo-600 font-bold text-lg">Administralos</span>
      </p> 
      <form className="bg-white shadow-md rounded-lg py-10 px-5" action="">
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase">Nombre Mascota</label>
          <input id="mascota" type="text" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md" 
          placeholder="Nombre de la Mascota"/>
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase">Email</label>
          <input id="email" type="email" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md" 
          placeholder="Email contacto Propietario"/>
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase">Alta</label>
          <input id="alta" type="date" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md" 
          />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase">Sintomas</label>
          <textarea id="sintomas" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
          />
        </div>

        <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" 
        value="Agregar Paciente" />
      </form>
    </div>
  )
}

export default Formulario;