import React from 'react'

/**
 * Icono de punto (viñeta) como etiqueta svg
 * @param {*} props propiedades del componente
 * @returns Componente svg de una viñeta circular
 */
const Point = (props) => {
  return (
    <svg
      data-name="Capa 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      {...props}
    >
      <path
        d="M32 0a32 32 0 1032 32A32 32 0 0032 0zm0 46.55A14.55 14.55 0 1146.55 32 14.56 14.56 0 0132 46.55z"
        fill="#a4e473"
      />
    </svg>
  )
}

export default Point