import Clientes from './Clientes'
import '../styles/ListaClientes.css'

const ListaClientes = ({pacientes, setPaciente}) => {
  return (
    <div className='lista_clientes'>
      <h2 className="title_pacientes">Listado de Pacientes</h2>
      <p className="p_pacientes">
        Administra tus <span>Clientes y Cítas</span>
      </p>
      { pacientes.map( p => (
        <Clientes
          key={p.id}
          paciente={p}
          setPaciente={setPaciente}
        />
      ))}
    </div>
  )
}

export default ListaClientes