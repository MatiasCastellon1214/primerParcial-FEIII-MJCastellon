import { useState } from 'react'
import Card from './Components/Card'
import Form from './Components/Form'
import Shop from './Components/Shop'
import './App.css'

function App() {

  const [clase, setClase] = useState({
    docente: {},
    form: false
  })
  
  let docentes = [
    {id: 1, nombre: 'Charles Darwin', asignatura: 'Evolución'},
    {id: 2, nombre: 'Jakob Bernoulli', asignatura: 'Hidrostática'},
    {id: 3, nombre: 'Ronald Fisher', asignatura: 'Estadística'},
    {id: 4, nombre: 'Stephen Hawkins', asignatura: 'Física'},
    {id: 5, nombre: 'Horacio Quiroga', asignatura: 'Literatua'},
    {id: 5, nombre: 'Julio Cortazar', asignatura: 'Literatua'}
  ]

  return (
    <>
      <h2>Clases de consulta</h2>
      <Form docente={clase.docente}/>
      <Shop docentes={docentes}/>
      
    </>
  )
}

export default App
