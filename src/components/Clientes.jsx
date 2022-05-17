import '../styles/Clientes.css'

const Clientes = ({paciente, setPaciente}) => {

  const { cliente, nombre, email, fecha, sintomas } = paciente
  console.log(paciente);

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
          className="btn_editar btn_cliente">
          Editar
        </button>
        <button 
          type='button'
          className="btn_eliminar btn_cliente"
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default Clientes