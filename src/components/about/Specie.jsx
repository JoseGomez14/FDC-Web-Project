import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import { ContainerSlider, ContainerColumn } from '../../elements/Containers';
import { H2 } from '../../elements/Titles';
import { BackButton } from '../../elements/Buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Paragraph from '../../elements/Paragraph';
import Slider from '../../elements/Slider';

/**
 * Componente que muestra la información detallada de una especie
 * 
 * @param {*} specie objeto que contiene los datos de la especie
 * @param {*} setPopUpState modificador de estado de la ventana emergente
 * @param {*} id identificador de la especie mostrada
 * @returns retorna la sección que muestra la información de cada especie
 */
const Specie = ({ specie, setPopUpState, id }) => {
    const urlSpecie = document.location.origin + '/about/' + (id || specie.id);

    return (<Section className='contents'>
        {setPopUpState && <BackButton onClick={() => setPopUpState(false)} title='Volver a la gallería'><FontAwesomeIcon icon={faArrowLeft} /></BackButton>}
        
        <H2 title='Nombre común' style={{ paddingTop: setPopUpState ? '2rem' : '0px' }}>{specie.commonName}</H2>

        <ContainerSlider>
            <Slider slides={specie.images} />
        </ContainerSlider>

        {specie.sound !== '' && <ContainerColumn>
            <Paragraph><b>Sonido de la especie</b></Paragraph>
            <Audio src={specie.sound} controls w></Audio>
            {specie.srcSound && <Paragraph><b>Sonido tomado de: </b>{specie.srcSound}</Paragraph>}
        </ContainerColumn>}

        <Paragraph><b>Nombre científico: </b><em>{specie.scientificName}</em></Paragraph>

        {specie.description && <Paragraph><b>Descripción: </b>{specie.description}</Paragraph>}

        {specie.genus && <Paragraph><b>Género: </b>{specie.genus}</Paragraph>}

        <Paragraph><b>Clase: </b>{specie.className}</Paragraph>
        <Paragraph><b>Reino: </b>{specie.kingdom}</Paragraph>
        <Paragraph><b>Hábitat: </b>{specie.habitat}</Paragraph>

        {specie.size !== 0 && <Paragraph><b>Tamaño: </b>{specie.size} cm</Paragraph>}

        {specie.food && <Paragraph><b>Alimentos: </b>{specie.food}</Paragraph>}

        {specie.skinColor && <Paragraph><b>Color del pelaje: </b>{specie.skinColor}</Paragraph>}

        {specie.state === true && <Paragraph style={{ color: '#ee5513' }}><b>¡Especie en vía de extinción!</b></Paragraph>}

        {specie.mapUrl && <ContainerColumn><iframe src={specie.mapUrl} height="450" allowFullScreen loading="lazy" title='Ubicación del registro de la especie' /></ContainerColumn>}

        {specie.inaturalistUrl && <Paragraph><b>Observación en iNaturalist: </b><a href={specie.inaturalistUrl} target='_blank' rel='noreferrer'>{specie.inaturalistUrl}</a></Paragraph>}

        <Paragraph><b>Compartir especie: </b><a href={urlSpecie} target='_blank' rel='noreferrer'>{urlSpecie}</a></Paragraph>
    </Section>
    );
}

/**
 * Secciónestilizada para mostrar el contenido y se adapte a los tamaños de pantalla
 */
const Section = styled.section`
    width: 100%;
    height: 100%;
    min-height: 100%;
    overflow-y: scroll;
    position: relative;
    background-color: ${theme.veryLightGray};
    border-radius: 0.8rem;
    padding: 1rem;

    h2, p{
        width: min(900px, 100%);
        margin: 1rem auto;
        word-wrap: break-word;
    }

    iframe{
        width: min(900px, 100%);
        border: none;
        border-radius: 0.8rem;
    }
`

/**
 * Componente de audio estilizado
 */
const Audio = styled.audio`
    background-color: #bbe29e;
    border-radius: 2rem;

    &::-webkit-media-controls-play-button, &::-webkit-media-controls-panel{
        background-color: #bbe29e;
    }
`

export default Specie;