import '../styles/Clientes.css'

const Clientes = ({paciente, setPaciente, eliminarPaciente}) => {

  const { cliente, nombre, email, fecha, sintomas, id } = paciente

  const handleEliminar = () => {
    const respuesta = confirm('¿Desea eliminar paciente?')
    if(respuesta){
      eliminarPaciente(id)
    }
  }

  return (
    <div className="clientes_content">
      <p className="p_clientes">
        Paciente: <span>{cliente}</span>
      </p>
      <p className="p_clientes">
        Responsable: <span>{ nombre }</span>
      </p>
      <p className="p_clientes">
        Email: <span>{email}</span>
      </p>
      <p className="p_clientes">
        Fecha Alta: <span>{fecha}</span>
      </p>
      <p className="p_clientes">
        Síntomas: <span>{ sintomas }</span>
      </p>
      <div className="btns_content">
        <button 
          type='button'
          className="btn_editar btn_cliente"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button 
          type='button'
          className="btn_eliminar btn_cliente"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default Clientes