import Clientes from './Clientes'
import '../styles/ListaClientes.css'
import { useEffect } from 'react'
const ListaClientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  useEffect(() => {
    if(pacientes > 0){
      console.log('nuevo paciente');
    }
  }, [pacientes])
  
  return (
    <div className='lista_clientes'>
      <h2 className="title_pacientes">Listado de Pacientes</h2>
      <p className="p_pacientes">
        Administra tus <span>Clientes y Cítas</span>
      </p>
      <hr />
      { pacientes.map( p => (
        <Clientes
          key={p.id}
          paciente={p}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      ))}
    </div>
  )
}

export default ListaClientes