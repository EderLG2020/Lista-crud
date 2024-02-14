import { useState, useEffect } from "react";
import ErrorForm from "../Error/errorForm";

const Formulario = ({ paciente, setPaciente, patiend, setPatiend }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setpropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patiend).length > 0) {
      setNombre(patiend.nombre);
      setEmail(patiend.email);
      setpropietario(patiend.propietario);
      setFecha(patiend.fecha);
      setSintomas(patiend.sintomas);
    }
  }, [patiend]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      console.log("Hay al menos un campo vacio");
      setError(true);
      return;
    }

    setError(false);
    const objPatient = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (patiend.id) {
      objPatient.id = patiend.id;
      const pacientesActualizados = paciente.map((pacienteState) =>
        pacienteState.id === patiend.id ? objPatient : pacienteState
      );
      setPaciente(pacientesActualizados);
      setPatiend({});
    } else {
      objPatient.id = generarId();
      setPaciente([...paciente, objPatient]);
    }

    setNombre("");
    setEmail("");
    setpropietario("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="container md:w-full lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento paciente</h2>
      <p className="text-lg mt-5 mb-10 text-center">
        Añade pacientes y {""}
        <span className="text-indigo-600 font-bold text-lg">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && <ErrorForm mensaje="Todos los campos son obligatorio" />}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre de la Mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase"
          >
            Nombre Del Propietario
          </label>
          <input
            id="propietario"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre del propietario"
            value={propietario}
            onChange={(e) => setpropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Email contacto Propietario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase">
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase">
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={patiend.id ? "Actualizar" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
