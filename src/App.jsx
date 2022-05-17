import { useEffect, useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListaClientes from './components/ListaClientes'

function App() {

  const [pacientes, setPacientes] = useState([])

  const [paciente, setPaciente] = useState({})

  useEffect(()=>{
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes'))
      setPacientes(pacientesLS)
    }
    
    obtenerLS()
  },[])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = (id) => {
    const actualizados = pacientes.filter(p => p.id !== id)
    setPacientes(actualizados)
  }

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
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
