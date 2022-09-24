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

                <Paragraph>Somos un grupo de investigación <em>ONDAS</em> de la Institución Educativa Técnico Industrial Tomás Carrasquilla del municipio de Santo Domingo, Antioquia, Colombia. El grupo está conformado por 20 estudiantes de grados entre 9° a 11°.</Paragraph>

                <Paragraph>El título de nuestro proyecto es <em>caracterizar la fauna del municipio de Santo Domingo, Antioquia a partir de la pregunta ¿Cuáles son las especies de fauna presentes en el municipio de Santo Domingo? El grupo adquiere el compromiso de identificar las especies de fauna presentes en el municipio para educar en una cultura de cuidado y preservación de las especies y del medio ambiente mediante el conocimiento, identificación y familiarización.</em></Paragraph>
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