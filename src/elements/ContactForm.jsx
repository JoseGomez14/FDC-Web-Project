import styled from "styled-components";
import theme from "../theme";

/**
 * Formulario estilizado para la sección de contactos vía email
 * Media Query: 900px
 */
const ContactForm = styled.form`
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 1.275rem;

    @media (max-width: 900px) {
        width: 100%;
        align-items: center;
    }
`

/**
 * Elemento input estilizado para la sección de contactos vía email
 * Adaptado al fondo oscuro de la sección
 */
const ContactInput = styled.input`
    background-color: ${theme.mostlyBlack};
    border-radius: 1rem;
    width: 100%;
    height: 3rem;
    border: none;
    outline: none;
    padding: 0.5rem 0.7rem;
    color: ${theme.veryLightGray};
    font-size: 1.125rem;
`

/**
 * Elemento textArea estilizado para la sección de contactos vía email
 * Adaptado al fondo oscuro de la sección
 */
const ContactTextArea = styled.textarea`
    background-color: ${theme.mostlyBlack};
    border-radius: 1rem;
    width: 100%;
    height: 7.125rem;
    min-height: 7.125rem;
    border: none;
    outline: none;
    resize: vertical;
    padding: 0.5rem 0.7rem;
    color: ${theme.veryLightGray};
    font-size: 1.125rem;
    font-family: 'Fira Sans', sans-serif;
`

export { ContactForm, ContactInput, ContactTextArea };