import { useState, useEffect } from "react";
import "./App.css";
import Formulario from "./components/Formulario/Formulario";
import ListadoForm from "./components/ListadoFormulario/ListdoFormulario";
import Header from "./components/header/header";

function App() {
  const [paciente, setPaciente] = useState(
    JSON.parse(localStorage.getItem("paciente")) ?? []
  );
  const [patiend, setPatiend] = useState({});

  useEffect(() => {
    localStorage.setItem("paciente", JSON.stringify(paciente));
  }, [paciente]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = paciente.filter(
      (patiend) => patiend.id !== id
    );
    setPaciente(pacientesActualizados);
  };

  return (
    <div className="container mx-auto pt-20 lg:pt-10 md:pt-10">
      <Header />
      <div className="mt-12 p-5 md:flex">
        <Formulario
          paciente={paciente}
          setPaciente={setPaciente}
          patiend={patiend}
          setPatiend={setPatiend}
        />
        <ListadoForm
          paciente={paciente}
          setPatiend={setPatiend}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
