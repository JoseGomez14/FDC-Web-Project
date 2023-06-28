import React from 'react'
import { Container, ContainerRow } from '../../elements/Containers';
import imgProductions from '../../assets/images/productions.jpg'
import { H2 } from '../../elements/Titles';
import Paragraph from '../../elements/Paragraph'
import {Button} from '../../elements/Buttons'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

/**
 * Componente encargado de mostrar información de las producciones del grupo y la posibilidad de navegar a la gallería de producciones
 * @param {*} id id del contenido 
 * @returns sección conocimiento de las producciones
 */
const Productions = ({id}) => {
    return ( <Container dark id={id} image={imgProductions}>
        <ContainerRow>
            <aside>

            </aside>
            <Aside>
                <H2 light>Producciones</H2>
                <Paragraph light>Diseñamos una colección que contiene las especies de fauna del municipio de Santo Domingo con registros fotográficos plasmados en ella, el nombre común y científico de la especie y algunas características que permitan conocer el estilo de vida o maneras de comportamiento biológico de algunas familias, géneros o especies. También hacemos uso de redes sociales, en donde se publican fotografías con sus respectivos nombres (común y científico) con el fin de generar interacción con la comunidad que utilice las nuevas tecnologías.</Paragraph>
                
                <Paragraph light>En las salidas de campo que realizamos, además de obtener registros fotográficos, también se graban sonidos de las especies, los cuales son divulgados a la comunidad a través de nuestro sitio Web.</Paragraph>
                
                <Paragraph light>Al tener en cuenta que en algunos registros fotográficos no se pueden obtener algunos detalles de la naturaleza o que no se pueden plasmar ciertos procesos, en el grupo de investigación recurrimos a la ilustración científica mediante los integrantes del proyecto, para luego involucrar a otras personas como artistas y niños y adolescentes estudiantes.</Paragraph>
                <br/>
                <LearnMore as={NavLink} to='/gallery' light='true'>¡Conoce más💚!</LearnMore>
            </Aside>
        </ContainerRow>
    </Container> );
}

/**
 * Estilos para el botón de "Conocer más"
 */
const LearnMore = styled(Button)`
    text-decoration: none;
    padding: 0.725rem 20%;
    color: black;
    font-size: 1.8rem;
    font-weight: 600;

    &:hover{
        font-size: 1.9rem;
    }
`

/**
 * Elemento estilizado que agrega un fondo en pantallas de tamaño medio e inferior para mejorar la visibilidad
 * del texto
 */
const Aside = styled.aside`
    @media (max-width: 1000px) {
        background: rgba(0, 70, 81, 0.5);
        padding: 15% 5%;
        border-radius: 0.5rem;
        backdrop-filter: blur(5px);
    }
` 
export default Productions;