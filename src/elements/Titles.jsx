import styled from 'styled-components';
import theme from '../theme';

/**
 * Título estilizado - Título de gran tamaño con sombra, posibilidades de light y dark
 */
const H1 = styled.h1`
    text-align: start;
    font-size: 6rem;
    line-height: 5.5rem;
    position: relative;
    color: ${(props) => props.light ? theme.veryLightGray : '#000'};
    margin-bottom: 1rem;
    text-shadow: 0.25rem 0.25rem 0.375rem ${theme.veryDarkCyan};
`

/**
 * Título estilizado - Título de gran mediano-grande con barra inferior, posibilidades de light y dark
 */
const H2 = styled.h2`
    text-align: start;
    font-size: 1.75rem;
    position: relative;
    color: ${(props) => props.light ? theme.veryLightGray : '#000'};
    margin-bottom: 1rem;

    &::first-letter{
        font-size: 3.375rem;
        font-weight: 500;
    }

    &::before{
        background-color: ${(props) => props.light ? theme.softGreen : theme.darkCyan};
        content: "";
        height: 3px;
        width: 17rem;
        position: absolute;
        bottom: 4px;
    }

`
/**
 * Título estilizado - Títulod de mediano-grande, posibilidades de cyan y dark
 */
const H3 = styled.h3`
    color: ${(props) => props.cyan? theme.darkCyan: '#000'};
    font-size: 2rem;
    text-align: start;
    margin-bottom: 1.5rem;
`

export { H1, H2, H3};