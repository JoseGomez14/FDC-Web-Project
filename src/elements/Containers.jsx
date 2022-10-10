import styled, { keyframes } from "styled-components";
import theme from "../theme";

/**
 * Contenedor general estilizado - aplica un centrado a los elementos y un padding.
 * Estilos: small, image, color, light, dark
 * Media Queries (768px)
 */
const Container = styled.section`
    min-height: calc(${(props) => props.small ? '30vh' : '100vh'} - 3rem);
    width: 100%;
    padding: 8% 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-in-out;
    background: ${(props) => props.image ? 'url(' + props.image + ')' :
        props.dark ? theme.veryDarkCyan : 'transparent'};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;

    @media (max-width: 768px) {
        padding: 10% 5%;
    }
`
/**
 * Contendor flex vertical - distribuye los elementos de forma vertical
 */
const ContainerColumn = styled.article`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    aside{
        width: 100%;
    }
`
/** 
 * Contendor flex horizontal - distribuye los elementos de forma horizontal
 * Estilos: alignStart, alignCenter, columnSmall, columnNormal
*/
const ContainerRow = styled.article`
    width: 100%;
    display: flex;
    align-items: ${(props) => props.alignStart ? 'flex-start' : 'center'};
    justify-content: center;
    flex-wrap: wrap;

    aside{
        flex: 1 1 ${(props) => props.columnSmall ? '240px' : '400px'};
    }
`

/** 
 * Contendor grid - distribuye los elementos de forma forma uniforme, admite dos tamaños de item (1/1 y 2/1)
*/
const ContainerGrid = styled.div`
    width: 100%;
    display: grid;
    grid-gap: ${(props) => props.gallery? '1.5rem': '1rem'};
    grid-template-columns: ${(props) => props.gallery? 'repeat(auto-fill, minmax(min(100%, 16rem), 1fr))':
        'repeat(auto-fill, minmax(min(100%, 10rem), 1fr))'};
    grid-auto-flow: dense;
`

/** 
 * Item grid - elemento del grid
 * Estilos: large o normal
 * Media Query: (660px)
*/
const GridItem = styled.div`
    width: 100%;
    height: 100%;
    max-height: 200px;
    grid-column: span ${(props) => props.large ? 2 : 1};
    grid-row: span 1;
    aspect-ratio: ${(props) => props.large ? 2 : 1};
    background-color: white;
    border-radius: 0.8rem;
    padding: 2rem;
    
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 660px){
        max-height: 150px;
    }
`

/**
 * Animación para keleton que mueve el background secuencialmente
 */
const shine = keyframes`
    to {
        background-position-x: -200%;
    }
`

/** 
 * Item grid - elemento del grid (Enfocado en elemento de galeria) con relación de aspecto 3:2
 * Modifica los estilos de la imagen contenida y pone los titulos encima de la imagen
*/
const GridItemGallery = styled.div`
    width: 100%;
    height: 100%;
    aspect-ratio: 3/4;
    transition: all 0.4s ease-in-out;

    figure{
        cursor: pointer;
        width: 100%;
        height: 100%;
        transition: transform 0.3s ease-in-out;
        img{
            border-radius: 0.8rem;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% 50%;
            background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
            background-size: 200% 100%;
            animation: 1.5s ${shine} linear infinite;
        }

        &:hover{
            transform: scale(1.025);
        }
    }
`

/**
 * Contenedor flotante estilo PopUp o ventana emergente
 */
const ContainerFloat = styled.div`
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 30;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
    padding: 2rem min(4%, 4rem);
`

/**
 * Contenedor tipo flex para slider
 */
const ContainerSlider = styled.div`
  .swiper {   
    width: min(900px, 100%);
    height: 500px;
    border-radius: 0.8rem;
    margin-bottom: 1.5rem;
}

.swiper-slide {
      width: 100%;
      height: 500px;
      display: flex;
      justify-content: center;

    div{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;

      img{
        object-fit: cover;
        border-radius: 0.8rem;
     }
    }
  }
`

export { Container, ContainerColumn, ContainerRow, ContainerGrid, GridItem, GridItemGallery, ContainerFloat, ContainerSlider };