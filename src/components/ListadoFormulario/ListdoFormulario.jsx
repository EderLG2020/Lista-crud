import Paciente from "../Paciente/paciente";

const ListadoForm = () => {
  return (
    <>
    <div className="md:w-1/2 lg:w-3/5 h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">
      Listado Formulario
      </h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administrar tus {""} 
        <span className="text-indigo-600 font-bold text-xl">Pacientes y Citas</span>
      </p>
      <Paciente></Paciente>
      <Paciente></Paciente>
      <Paciente></Paciente>
      <Paciente></Paciente>
      <Paciente></Paciente>
     
    </div>
    </>
  );
};
export default ListadoForm;
