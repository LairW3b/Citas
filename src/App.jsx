import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListaClientes from './components/ListaClientes'

function App() {

  const [pacientes, setPacientes] = useState([])

  const [paciente, setPaciente] = useState({})

  return (
    <div className="App">
      <Header/>
      <div className="content_app">
        <Formulario
          paciente={paciente}
          setPaciente={setPaciente}
          pacientes={pacientes}
          setPacientes={setPacientes}
        />
        <ListaClientes
          pacientes={pacientes}
          setPacientes={setPaciente}
        />
      </div>
    </div>
  )
}

export default App
