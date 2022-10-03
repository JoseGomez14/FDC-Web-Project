import React from 'react'
import styled from 'styled-components';
import { Container, ContainerRow } from './Containers';
import IconFDC from '../assets/images/IconFDC';
import ListItem, { List } from './Lists';

/**
 * Este componente contiene el HTML del footer
 * @returns Retorna el Footer de la página
 */
const Footer = () => {
    return (
        <footer>
            <hr style={{margin: '0 10%'}}/>
            <Container small>
                <ContainerRow columnSmall>
                    <AsideLeft>
                        <IconFDC fill='#a4e473' />
                    </AsideLeft><br /><br />
                    <AsideRight>
                        <List onlyTitle>
                            <ListItem
                                title='Acerca de nosotros'
                                href={'/#about-us'}
                            />
                            <ListItem
                                title='Producciones'
                                href={'/#productions'}
                            />
                            <ListItem
                                title='Objetivos'
                                href={'/#objectives'}
                            />
                        </List>
                    </AsideRight>
                    <AsideRight>
                        <List onlyTitle>
                            <ListItem
                                title='Historia - Logros'
                                href={'/#history'}
                            />
                            <ListItem
                                title='¡Contáctanos!'
                                href={'/#contact'}
                            />
                            <ListItem
                                title='Aliados'
                                href={'/#allies'}
                            />
                        </List>
                    </AsideRight>
                </ContainerRow>
            </Container>
        </footer>
    );
}

/**
 * Contenedor para el icono de FDC y barra divisora en pantallas de tamaño intermedio en adelante
 * Media Queries: 900px, 535px 
 */
const AsideLeft = styled.aside`
    position: relative;
    padding: 0 5%;

    &::before{
        background-color: #00272D;
        content: "";
        height: 240%;
        width: 3px;
        position: absolute;
        right: 5%;
        top: -80%;
    }

    @media (max-width: 900px) {
        flex: 1 1 800px !important;
        margin-bottom: 2rem;
        padding: 0 25%;
        &::before{
            height: 0;
        }
    }

    @media (max-width: 535px){
        padding: 0 15%;
    }
`

/**
 * Contenedor del contenido derecho - modifica el margen a partir de pantallas de tamaño mediano
 * Media query: 900px
 */
const AsideRight = styled.aside`
    @media (max-width: 900px) {
        margin-left: 4rem;
    }
`

export default Footer;