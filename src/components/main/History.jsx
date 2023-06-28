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
                        <Paragraph>- Semana del emprendimiento institucional.</Paragraph>
                        <Paragraph>- Sembratón.</Paragraph>
                        <Paragraph>- Laboratorio Socioambiental - Alejandria.</Paragraph>
                        <Paragraph>- Encuentro municipal - Alejandria.</Paragraph>
                        <Paragraph>- Encuentro departamental ONDAS.</Paragraph>
                    </div>
                    <div></div>
                    <div>
                        <H3 cyan>2020</H3>
                        <Paragraph>- Foro ambiental - Santo Domingo.</Paragraph>
                        <Paragraph>- Divulgación de resultados a estudiantes.</Paragraph>
                        <Paragraph>- Encuentro departamental ONDAS</Paragraph>
                        <Paragraph>- Avistamiento con biólogos de Cornare.</Paragraph>
                    </div>
                    <div></div>
                    <div className='point'></div>
                    <div className='point'></div>
                    <div className='point'></div>
                    <div className='point'></div>
                    <div></div>
                    <div>
                        <H3 cyan>2021</H3>
                        <Paragraph>- Socializaciones académicas.</Paragraph>
                        <Paragraph>- Nuevas alianzas.</Paragraph>
                        <Paragraph>- Curso fotografíco.</Paragraph>
                        <Paragraph>- Concurso cuento y dibujo.</Paragraph>
                        <Paragraph>- Encuentro departamental ONDAS.</Paragraph>
                        <Paragraph>- Encuentro regional ONDAS - Manizales.</Paragraph>
                        <Paragraph>- Encuentro nacional ONDAS - Barranquilla.</Paragraph>
                    </div>
                    <div></div>
                    <div>
                        <H3 cyan>2022</H3>
                        <Paragraph>- Publicación a nivel departamental (Escrituras Desde el Aula).</Paragraph>
                        <Paragraph>- Participación en Expociencia Ibagué.</Paragraph>
                        <Paragraph>- Participación en SAVIACIUDADANOS Rionegro.</Paragraph>
                        <Paragraph>- Laboratorio Socioambiental - Santo Domingo.</Paragraph>
                        <Paragraph>- Foro ambiental - Santo Domingo.</Paragraph>
                        <Paragraph>- Jornada de siembre - San Javier.</Paragraph>
                        <Paragraph>- Publicación en la revista ingenio UPB.</Paragraph>
                        <Paragraph>- Encuentro de divulgación intermunicipal ONDAS Medellín.</Paragraph>
                        <Paragraph>- Diseño cartilla Fuera de Contexto.</Paragraph>
                        <Paragraph>- Feria internacional Chile.</Paragraph>
                    </div>
                </TimeLine>
            </aside>
            <aside>
                <a href="https://firebasestorage.googleapis.com/v0/b/fdc-web-project.appspot.com/o/images%2FLi%CC%81nea%20de%20tiempo%20FDC.png?alt=media&token=d04533ee-ad39-48da-85b5-81dc7ff1a1d4" download>Descarga la línea de tiempo completa.</a>
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