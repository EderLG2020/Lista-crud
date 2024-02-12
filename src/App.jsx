import { useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario/Formulario";
import ListadoForm from "./components/ListadoFormulario/ListdoFormulario";
import Header from "./components/header/header";

function App() {
  const [paciente, setPaciente] = useState([]);

  return (
    <div className="container mx-5">
      <Header />
      <div className="pt-10 flex">
        <Formulario paciente={paciente} setPaciente={setPaciente} />
        <ListadoForm paciente={paciente} />
      </div>
    </div>
  );
}

export default App;
