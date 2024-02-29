import React from 'react';

const Card = ({alumno}) => {
  return (
    <div>
      <p>Hola {alumno.nombre}</p>
      <p>Usted ha reservado turno para tomar clases de apoyo de: {alumno.asignatura}</p>
    </div>
  );
}

export default Card;
