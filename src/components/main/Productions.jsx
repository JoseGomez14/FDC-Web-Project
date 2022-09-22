import React from 'react'
import { Container, ContainerRow } from '../../elements/Containers';
import imgProductions from '../../images/productions.png'
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
            <aside>
                <H2 light>Producciones</H2>
                <Paragraph light>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptates libero beatae quibusdam aspernatur aliquid at, sit excepturi explicabo praesentium distinctio a quia placeat itaque nulla sunt dolores architecto velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptates libero beatae quibusdam aspernatur aliquid at, sit excepturi explicabo praesentium distinctio a quia placeat itaque nulla sunt dolores architecto velit!</Paragraph>
                <Paragraph light>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptates libero beatae quibusdam aspernatur aliquid at, sit excepturi explicabo praesentium distinctio a quia placeat itaque nulla sunt dolores architecto velit!</Paragraph>
                <br/>
                <LearnMore as={NavLink} to='/gallery' light='true'>!Conoce más💚¡</LearnMore>
            </aside>
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
 
export default Productions;