import React from 'react'

/**
 * Icono de Facebook como etiqueta svg
 * @param {*} props propiedades del componente
 * @returns Componente svg del icono de Facebook
 */
const IconFacebook = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="7.2 7.2 49.7 49.7"
      aria-label="Facebook"
      fill="#f4f4f4"
      {...props}
    >
      <path
        d="M32 7.174C18.311 7.174 7.174 18.311 7.174 32S18.311 56.826 32 56.826 56.826 45.689 56.826 32 45.689 7.174 32 7.174zm6.174 25.7h-4.039v14.398H28.15V32.874h-2.845v-5.088h2.845v-3.291c0-2.357 1.12-6.04 6.04-6.04l4.433.017v4.939h-3.219c-.524 0-1.268.262-1.268 1.386v2.99h4.56l-.522 5.087z"
        fill="inherit"
      />
    </svg>
  )
}

export default IconFacebook
