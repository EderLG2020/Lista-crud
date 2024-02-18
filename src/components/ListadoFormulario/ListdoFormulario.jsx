import Paciente from "../Paciente/paciente";

const ListadoForm = ({ paciente, setPatiend, eliminarPaciente }) => {
  return (
    <div className="container lg:w-full md:h-screen overflow-y-scroll text-white">
      {paciente && paciente.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado Formulario
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administrar tus {""}
            <span className="text-green-400 font-bold">Pacientes y Citas</span>
          </p>

          {paciente.map((patient, index) => (
            <Paciente
              key={index}
              patient={patient}
              setPatiend={setPatiend}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-white text-3xl text-center">
            No hay pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center text-white">
            Comienza agregando pacientes {""}
            <span className="text-green-400 font-bold">y apareceran aqui!</span>
          </p>
        </>
      )}
    </div>
  );
};
export default ListadoForm;
