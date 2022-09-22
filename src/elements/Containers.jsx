import styled from "styled-components";
import theme from "../theme";

/**
 * Contenedor general estilizado - aplica un centrado a los elementos y un padding.
 * Estilos: small, image, color, light, dark
 * Media Queries (768px)
 */
const Container = styled.section`
    min-height: calc(${(props) => props.small? '30vh' : '100vh'} - 3rem);
    width: 100%;
    padding: 8% 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.image? 'url(' + props.image + ')': 
        props.dark ? theme.veryDarkCyan: theme.veryLightGray};
    
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
    align-items: ${(props) => props.alignStart? 'flex-start': 'center'};
    justify-content: center;
    flex-wrap: wrap;

    aside{
        flex: 1 1 ${(props) => props.columnSmall ? '240px': '400px'};
    }
`

/** 
 * Contendor grid - distribuye los elementos de forma forma uniforme, admite dos tamaños de item (1/1 y 2/1)
 * Media Queries (1100px, 800px, 660px)
*/
const ContainerGrid = styled.div`
    width: 100%;
    display: grid;
    overflow-x: auto;
    grid-gap: 1rem;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-flow: dense;

    @media (max-width: 1100px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 800px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 660px){
        grid-template-columns: repeat(1, 1fr);
    }

`

/** 
 * Item grid - elemento del grid
 * Estilos: large o normal
 * Media Queries (660px)
*/
const GridItem = styled.div`
    width: 100%;
    height: 100%;
    max-height: 300px;
    grid-column: span ${(props) => props.large? 2 : 1};
    grid-row: span 1;
    aspect-ratio: ${(props) => props.large? 2 : 1};
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

export { Container, ContainerColumn, ContainerRow, ContainerGrid, GridItem };