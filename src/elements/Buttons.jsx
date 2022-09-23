import styled from "styled-components";
import theme from "../theme";

/**
 * Enlace estilizado a una red social mostrado como botón, contiene un icono SVG y un párrafo
 */
const ContactButton = styled.a`
    background-color: ${theme.mostlyBlack};
    border-radius: 2rem;
    height: 3rem;
    width: 50%;
    min-width: 20rem;
    padding: 0.5rem;
    margin-bottom: 1.275rem;
    text-decoration: none;
    transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
    display: flex;

    p{
        color: ${theme.veryLightGray};
        font-size: 1.8rem;
        font-weight: 500;
    }

    svg{
        height: 2rem;
        margin-right: 0.5rem;
    }

    &:hover{
        transform: scale(1.05);
        transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
        cursor: pointer;
    }
`

/**
 * Botón estilizado, contiene un estilos para un párrafo y diferentes opciones como tamaño (small o normal) y color (light o normal)
 */
const Button = styled.button`
    background-color: ${(props) => props.light? theme.veryLightGray: theme.mostlyBlack};
    border-radius: 2rem;
    height: 3rem;
    width: ${(props) => props.small? '30%' : '60%'};
    min-width: ${(props) => props.small? '30%' : '20rem'};
    padding: 0.5rem;
    transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
    border: none;

    p{
        color: ${theme.veryLightGray};
        font-size: ${(props) => props.small? '1.375rem' : '1.8rem'};
        font-weight: 500;
    }

    &:hover{
        transform: scale(1.05);
        transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
        cursor: pointer;
    }
`

/**
 * Botón estilizado de menú hamburguesa
 */
const MenuButtonWrapper = styled.button`
  border: none;
  display: block;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.5s linear;
  &:hover{
    transform: scale(1.1);
    transition: all 0.5s linear;
  }
  @media (min-width: 1450px) {
    display: none;
  }
`;

/**
 * Bóton estilizado de ir abajo (Sección de home en la página principal)
 */
const GoDownButton = styled.button`
  background: transparent;
  border: none;
  transition: all 0.3s ease-in-out;
  margin-top: 8rem;
  img{
    width: 4rem;
  }

  &:hover{
    transform: scale(1.1);
    cursor: pointer;
  }
`


/**
 * Botón del menú hamburguesa dinámico (Icono de hamburguesa y icono de cierre)
 * @param {*} open Estado del menú hamburguesa
 * @param {*} handleClick función que se ejecurá al hacer click 
 * @returns 
 */
function MenuButton({ open, handleClick }) {
  return !open ? (
    <MenuButtonWrapper onClick={handleClick} title="Enlaces de interés" id="hamburguerIcon">
      <svg viewBox="0 0 100 80" width="1.8rem" height="1.8rem" fill="#f4f4f4">
      <rect width={100} height={12} rx={6} />
      <rect x={10} y={34} width={90} height={12} rx={6} />
      <rect x={21} y={68} width={79} height={12} rx={6} />
      </svg>
    </MenuButtonWrapper>
  ) : (
    <MenuButtonWrapper onClick={handleClick}>
      <svg className="svg-icon" width="1.8rem" height="1.8rem" viewBox="0 0 20 20" fill="#f4f4f4">
        <rect x={0} y={10} width={20} height={2.4} rx={1.2} transform="rotate(45 10 10)"/>
        <rect x={0} y={10} width={20} height={2.4} rx={1.2} transform="rotate(135 10 10)"/>
      </svg>
    </MenuButtonWrapper>
  );
}

/**
 * Botón de regreso estilizado, redondeado y con hover
 */
const BackButton = styled.button`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  font-size: 1.5rem;
  line-height: 1.5rem;
  padding: 0.5rem 0.6rem;
  border-radius: 3rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover{
    transform: scale(1.05);
  }
`

export {ContactButton, Button, MenuButton, GoDownButton, BackButton};