import React, { useState, useEffect } from 'react';
import { Container, ContainerColumn, ContainerRow } from '../../elements/Containers';
import { H1 } from '../../elements/Titles';
import Paragraph from '../../elements/Paragraph'
import imgTeamFDC1 from '../../images/teamFDC1.png'
import imgTeamFDC2 from '../../images/teamFDC2.png'
import imgTeamFDC3 from '../../images/teamFDC3.png'
import iconDown from '../../images/iconDown.png'
import styled from 'styled-components';
import { GoDownButton } from '../../elements/Buttons';
import theme from '../../theme';

/**
 * Componente encargado de mostrar la presentación inicial del sitio web, imagen, título, frase y forma de avanzar al siguiente punto del sitio
 * @param {*} id id del contenido 
 * @returns sección de bienvenida al sitio
 */
const Home = ({ id }) => {
    const teamImages = [imgTeamFDC1, imgTeamFDC2, imgTeamFDC3]
    const [contImg, setContImg] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            (contImg < teamImages.length - 1) ? setContImg(contImg + 1) : setContImg(0)
        }, 4000)
    }, [contImg, teamImages.length])

    return (<ContainerC dark id={id} image={teamImages[contImg]}>
        <ContainerColumn>
            <aside>
                <ContainerRow>
                    <aside>
                        <H1 light style={{ letterSpacing: '0.1rem', marginTop: '4rem' }}>Fuera De</H1>
                        <H1 light>Contexto</H1>
                        <Paragraph light shadow style={{ fontSize: '1.8rem' }}><em>"Investigadores de lo nuestro"</em></Paragraph>
                    </aside>
                    <aside></aside>
                </ContainerRow>
            </aside>
            <aside>
                <GoDownButton onClick={() => {
                    let sliderHeight = document.getElementById(id).clientHeight;
                    window.scrollTo({ top: sliderHeight - 48 })
                }}>
                    <img src={iconDown} alt="" />
                </GoDownButton>
            </aside>
        </ContainerColumn>
        <div id='circle1'></div>
        <div id='circle2'></div>
        <div id='circle3'></div>
    </ContainerC>);
}

/**
 * Contendor estilizado - permite distribuir el contenido de la pantalla inicial
 * Tmabién contiene estilo de uno elementos circulares que permiten adornar la imagen,
 * que además se adaptan según el tamaño del dispositivo
 * 
 * Media Query: 535px
 */
const ContainerC = styled(Container)`
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    min-height: 100vh;
    div{
        border-radius: 100%;
        position: absolute;
    }

    article{
        position: relative;
        top: 0;
    }

    #circle1{
        width: 20rem;
        height: 20rem;
        background-color: ${theme.darkCyan};
        bottom: -12rem;
        right: -5rem;
    }
    #circle2{
        width: 23rem;
        height: 23rem;
        background-color: ${theme.veryDarkCyan};
        bottom: 0rem;
        right: -18rem;
    }
    #circle3{
        width: 10rem;
        height: 10rem;
        background-color: ${theme.softGreen};
        bottom: 3rem;
        right: 3rem;
    }

    @media (max-width: 535px) {
        #circle1{
            bottom: -15rem;
            right: -8rem;
        }
        #circle2{
            bottom: -3rem;
            right: -20rem;
        }
        #circle3{
            width: 7rem;
            height: 7rem;
            bottom: 2rem;
            right: 1rem;
        }
    }
`

export default Home;