import './App.css'
import Formulario from './components/Formulario/Formulario'
import ListadoForm from './components/ListadoFormulario/ListdoFormulario'
import Header from './components/header/header'

function App() {
  return (
    
    <div className='container mx-auto pt-10'>
      <Header/>
      <div className='mt-12 flex'>
        <Formulario/>
        <ListadoForm/>
      </div>
    </div>
    
  )
}

export default App
