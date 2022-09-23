import styled from "styled-components";
import theme from "../theme";

/**
 * Etique de formulario estilizada enfocada en la búsqueda y el filtrado de especies
 * También contiene los estilos para las etiquetas fieldset, legend, label e input (Checkbox)
 * para obtener un diseño uniforme y  acorde al sitio web
 */
const SearchForm = styled.form`
    padding: 1.5rem 0;
    margin-bottom: 1.5rem;
    border-radius: 0.8rem;
    width: 100%;
    display: flex;
    flex-direction: ${(props) => props.column && 'column'};
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;

    fieldset{
        width: 100%;
        padding: 0.5rem 0;
        padding-left: 0.5rem;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        border: none;
    }

    legend{ 
        font-weight: 500;
        font-size: 1.125rem;
    }

    label{
        width: 8.5rem;
        margin-right: 0.5px;
        display: flex;
        padding: 0.5rem;
        border-radius: 0.5rem;
        background-color: #eee;
        cursor: pointer;
        input{
            margin-right: 0.5rem;
        }

        &:hover{
            outline: 1px solid ${theme.darkGray};
        }
    }
`

/**
 * Input de búsqueda estilizado para adaptarse al diseño del sitio.
 */
const SearchInput = styled.input`
    height: 2.25rem;
    width: 60%;
    max-width: 30rem;
    padding: 0.25rem 1rem;
    outline: none;
    border: none;
    border-radius: 0.8rem;
    font-size: 1rem;

    &:active, &:focus{
        outline: 1px solid ${theme.darkGray};
    }
`

/**
 * Botón estilizado enfocado en el formulario de busqueda.
 */
const SearchButton = styled.button`
    height: 2.25rem;
    width: fit-content;
    cursor: pointer;
    padding: 0.25rem 1rem;
    border: none;
    border-radius: 0.8rem;
    font-size: 1rem;
    transition: all 0.3s ease-in-out;
    background-color: #ddd;
    color: ${theme.veryDarkCyan};
    
    &:hover{
        font-size: 1.1rem;
    }
`

export { SearchForm, SearchInput, SearchButton };