import styled from "styled-components";
import theme from "../theme";

/**
 * Párrafo estilizado de tamaño medio - Posibilidades de color light o dark
 */
const Paragraph = styled.p`
    font-size: 1.125rem;
    text-align: start;
    font-weight: 300;
    position: relative;
    color: ${(props) => props.light ? theme.veryLightGray : '#000'};
    margin-bottom: 1rem;
    text-shadow: ${(props)=> props.shadow && "0.1rem 0.1rem 0.25rem " + theme.veryDarkCyan};
`
 
export default Paragraph;