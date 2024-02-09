import "./App.css";
import Formulario from "./components/Formulario/Formulario";
import ListadoForm from "./components/ListadoFormulario/ListdoFormulario";
import Header from "./components/header/header";

function App() {
  return (
    <div className="container mx-5">
      <Header />
      <div className="pt-10 flex">
        <Formulario />
        <ListadoForm />
      </div>
    </div>
  );
}

export default App;
