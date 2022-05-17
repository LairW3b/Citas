import '../styles/Error.css'

const Error = ({ mensaje }) => {
  return (
    <div>
      <p className='error'>{mensaje}</p>
    </div>
  )
}

export default Error