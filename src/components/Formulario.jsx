
import { useEffect, useState } from 'react'
import Error from './Error'
import '../styles/Formulario.css'

const Formulario = ({ paciente, setPaciente, pacientes, setPacientes }) => {

  const [cliente, setCliente] = useState('')
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(paciente).length > 0 ) {
      setCliente(paciente.cliente)
      setNombre(paciente.nombre)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  },[paciente])

  // Función para generar un id
  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }
  
  //Funcion handleSubmit
  const handelSubmit = (e) => {
    e.preventDefault()
    // Validar Formulario
    if([cliente, nombre, email, fecha, sintomas].includes('')){
      console.log('hay elementos vacios...')   
      setError(true) 
    }else {
      console.log('hay elementos'); 
      setError(false) 
    }
    // Genero el objeto
    const objPaciente = {
      cliente,
      nombre,
      email,
      fecha,
      sintomas
    }

    if(paciente.id) {
      objPaciente.id = paciente.id

      const actualizar = pacientes.map(p => p.id === paciente.id ? objPaciente : p)

      setPacientes(actualizar)
      setPaciente({})
    }else {
      objPaciente.id = generarId()
      setPacientes([...pacientes, objPaciente])
    }

    // Limpiar campos
    setCliente('')
    setNombre('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className='content_form'>
      <h2 className="title_form">Seguimiento Pacientes</h2>

      <p className="parrafo">
        Añade Pacientes & <span>Administralos</span>
      </p>

      <form
        onSubmit={handelSubmit}
        className='formulario'
      >
      
      { error && <Error mensaje={'Todos los campos son obligatorios'}/> }

        <div className="label_content">
          <label
            htmlFor="cliente"
            className='label'
          >
            Nombre Paciente
          </label>
          <input
            id='cliente'
            type="text"
            placeholder='Nombre del paciente'
            className="input"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
          />
        </div>

        <div className="label_content">
          <label
            htmlFor="responsable"
            className='label'
          >
            Nombre del responsable
          </label>
          <input
            id='responsable'
            type="text"
            placeholder='Nombre del responsble'
            className="input"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="label_content">
          <label
            htmlFor="email"
            className="label"
          >
            Email
          </label>
          <input
            id='email'
            type="text"
            placeholder='Email de Contacto'
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="label_content">
          <label
            htmlFor="alta"
            className="label"
          >
            Alta
          </label>
          <input
            id='alta'
            type="date"
            className="input"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="label_content">
          <label
            htmlFor="sintomas"
            className="label"
          >
            Síntomas
          </label>
          <textarea
            id="sintomas"
            placeholder='Describa los Síntomas'
            className="text_area"
            cols="30"
            rows="10"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="btn_submit"
          value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente' }
        />
      </form>
    </div>
  )
}

export default Formulario