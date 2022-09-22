import React from 'react'
import styled from 'styled-components';
import { Container, ContainerColumn } from '../../elements/Containers';
import { H2, H3 } from '../../elements/Titles';
import Paragraph from '../../elements/Paragraph'
import theme from '../../theme';

/**
 * Componente encargado de mostrar información de los logros e historia en forma de linea de tiempo
 * @param {*} id id del contenido 
 * @returns sección de linea de tiempo
 */
const History = ({ id }) => {
    return (<Container id={id}>
        <ContainerColumn>
            <aside>
                <H2>Historia</H2>
            </aside>
            <aside>
                <TimeLine>
                    <div >
                        <H3 cyan>2019</H3>
                        <Paragraph>Describe brevemente un logró que obtuvo el grupo FDC en este período.</Paragraph>
                    </div>
                    <div></div>
                    <div>
                        <H3 cyan>2020</H3>
                        <Paragraph>Describe brevemente un logró que obtuvo el grupo FDC en este período.</Paragraph>
                    </div>
                    <div></div>
                    <div className='point'></div>
                    <div className='point'></div>
                    <div className='point'></div>
                    <div className='point'></div>
                    <div></div>
                    <div>
                        <H3 cyan>2021</H3>
                        <Paragraph>Describe brevemente un logró que obtuvo el grupo FDC en este período.</Paragraph>
                    </div>
                    <div></div>
                    <div>
                        <H3 cyan>Presente</H3>
                        <Paragraph>Describe brevemente un logró que obtuvo el grupo FDC en este período.</Paragraph>
                    </div>
                </TimeLine>
            </aside>
        </ContainerColumn>
    </Container>);
}

/**
 * Linea de tiempo estilizada
 * Contenedor grid, puntos por cada fecha y linea conectora de los puntos
 */
const TimeLine = styled.div`
    width: 100%;
    display: grid;
    overflow-x: hidden;
    grid-gap: 1rem;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 3rem;

    .point{
        width: 1.8rem;
        height: 1.8rem;
        margin: 2rem 0;
        border-radius: 50%;
        background-color: ${theme.veryDarkCyan};
        position: relative;

        &::before{
            content: '';
            position: absolute;
            top: calc(0.9rem - 1px);
            left: 0.5rem;
            width: 30rem;
            height: 2px;
            background-color: ${theme.veryDarkCyan};
        }

        &::after{
            content: '';
            position: absolute;
            width: 0.9rem;
            height: 0.9rem;
            top: 0.45rem;
            left: 0.45rem;
            border-radius: 50%;
            background-color: ${theme.veryLightGray};
        }
    }

    @media (max-width: 620px) {
        display: flex;
        flex-direction: column;

        .point{
            display: none;
        }
    }
`

export default History;