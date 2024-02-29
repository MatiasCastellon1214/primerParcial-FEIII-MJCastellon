import React, { useState } from 'react'
import Card from './Card';
import FormStyle from '../Styles/Form.module.css'

const Form = ({docente}) => {

  const [alumno, setAlumno] = useState({
    nombre: '',
    asignatura: ''
  })

  const [mostrar, setMostrar] = useState(false);
  const [err, setErr] = useState(false);

  const handleSubmit = (event) =>{
    const nombreSinEspacios = alumno.nombre.trim()
    event.preventDefault();
    if(nombreSinEspacios.length > 3 && nombreSinEspacios.length > 0 && alumno.asignatura.length >= 6){
      setMostrar(true)
      setErr(false)
    } else {
      setErr(true)
      setMostrar(false)
    }
  }

  return (
    <div className={FormStyle.formContainer}>
      <form onSubmit={handleSubmit} className={FormStyle.form}>
        <label>Nombre: </label>
        <input type="text" onChange={(event)=> setAlumno({...alumno, nombre: event.target.value})}/>
        
        <label>Asignatura: </label>
        <input type="text" onChange={(event)=> setAlumno({...alumno, asignatura: event.target.value})}/>
        <button className={FormStyle.enviarBtn}>Enviar</button>
      </form>
      {mostrar && <Card alumno={alumno}/>}
      {err && <p style={{color: 'crimson'}}>Por favor chequea que la información sea correcta</p>}
    </div>
  )
}

export default Form