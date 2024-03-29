const Paciente = ({ patient, setPatiend, eliminarPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas, id } = patient;

  const handleeliminar = () => {
    const respuesta = confirm("Deses eliminar este paciente?");
    if (respuesta) {
      eliminarPaciente(id);
    }
  };
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre {""}
        <span className="font-normal normal-case"> {nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario_ {""}
        <span className="font-normal normal-case"> {propietario} </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email {""}
        <span className="font-normal normal-case"> {email} </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta {""}
        <span className="font-normal normal-case"> {fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas {""}
        <span className="font-normal normal-case"> {sintomas}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-blue-600 hover:bg-blue-800 uppercase font-bold rounded-lg text-white"
          onClick={() => {
            setPatiend(patient);
          }}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-800 uppercase font-bold rounded-lg text-white"
          onClick={handleeliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
