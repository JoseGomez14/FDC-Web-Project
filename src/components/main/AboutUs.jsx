import React from 'react';
import { Container, ContainerRow } from '../../elements/Containers';
import styled from 'styled-components';
import Paragraph from '../../elements/Paragraph';
import { H2 } from '../../elements/Titles';
import logoFdc from '../../images/logoFDC.png'

/**
 * Componente encargado de mostrar información para describir lo que es el grupo de investigación FDC
 * @param {*} id id del contenido 
 * @returns sección de contenido que describe lo que es FDC
 */
const AboutUs = ({ id }) => {
    return (<Container id={id}>
        <ContainerRow>
            <aside>
                <H2>Acerca de Nosotros</H2>

                <Paragraph>Generación de conocimiento de las especies de fauna y flora del municipio de Santo Domingo, Antioquia para crear conciencia y sentido de pertenencia con el cuidado del ambiente.</Paragraph>

                <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere perferendis a autem similique quidem, voluptate magni! Dolorem cum, illum numquam incidunt ipsam quae? Eaque et quis earum cupiditate, mollitia veritatis?</Paragraph>

                <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere perferendis a autem similique quidem, voluptate magni! Dolorem cum, illum numquam incidunt ipsam quae? Eaque et quis earum cupiditate, mollitia veritatis?. </Paragraph>
            </aside>
            <aside>
                <Img src={logoFdc} alt="Logo - Fuera de Contexto" />
            </aside>
        </ContainerRow>
    </Container>);
}

/**
 * Logo estilizado del grupo FDC 
 */
const Img = styled.img`
    width: 75%;

    @media (max-width: 1325px) {
        width: 90%;
    }

    @media (max-width: 1100px) {
        width: 100%;
    }
`

export default AboutUs;