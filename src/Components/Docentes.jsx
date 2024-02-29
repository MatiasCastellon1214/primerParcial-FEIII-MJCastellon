import React from 'react'
import DocentesStyle from '../Styles/Docentes.module.css'

const Docentes = ({item}) => {
    const {nombre, asignatura} = item
  return (
    <div className={DocentesStyle.card}>
        <h3>Docente: {nombre}</h3>
        <h3>Asignatura: {asignatura}</h3>
        
    </div>
  )
}

export default Docentes