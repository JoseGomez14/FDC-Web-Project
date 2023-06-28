import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import { ContainerSlider, ContainerColumn, ContainerRow } from '../../elements/Containers';
import { H2 } from '../../elements/Titles';
import { BackButton, ContactButton } from '../../elements/Buttons';
import QrCode from '../../elements/QrCode';
import Alert from '../../elements/Alert';
import IconInaturalist from '../../assets/images/IconInaturalist';
import IconShare from '../../assets/images/IconShare';
import IconWts from '../../assets/images/IconWts';
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
    const [alert, setAlert] = useState({})
    const [alertState, setAlertState] = useState(false);

    const handleShare = () => {
        navigator.clipboard.writeText(urlSpecie);
        setAlert({ text: 'El enlace se ha copiado al portapapeles' })
        setAlertState(true);
    }

    return (<Section className='contents'>
        <Alert
            text={alert.text}
            alertState={alertState}
            setAlertState={setAlertState}
        />
        {setPopUpState && <BackButton onClick={() => setPopUpState(false)} title='Volver a la gallería'><FontAwesomeIcon icon={faArrowLeft} /></BackButton>}

        <H2 title='Nombre común' style={{ paddingTop: setPopUpState ? '2rem' : '0px' }}>{specie.commonName}</H2>

        <ContainerSlider>
            <Slider slides={specie.images} />
        </ContainerSlider>

        {specie.srcImage && <Paragraph><b>Imagen tomada de: </b>{specie.srcImage}</Paragraph>}

        {specie.sound !== '' && <ContainerColumn>
            <Paragraph><b>Sonido de la especie</b></Paragraph>
            <Audio src={specie.sound} controls w></Audio>
            {specie.srcSound && <Paragraph><b>Sonido tomado de: </b>{specie.srcSound}</Paragraph>}
        </ContainerColumn>}

        <Paragraph><b>Nombre Común: </b>{specie.commonName}</Paragraph>

        <Paragraph><b>Reino: </b>{specie.kingdom}</Paragraph>

        {specie.phylum && <Paragraph><b>Filo: </b>{specie.phylum}</Paragraph>}

        {specie.subphylum && <Paragraph><b>Subfilo: </b>{specie.subphylum}</Paragraph>}

        <Paragraph><b>Clase: </b>{specie.className}</Paragraph>

        {specie.order && <Paragraph><b>Orden: </b>{specie.order}</Paragraph>}

        {specie.family && <Paragraph><b>Familia: </b>{specie.family}</Paragraph>}

        <Paragraph><b>Género: </b>{specie.genus}</Paragraph>

        <Paragraph><b>Especie: </b><em>{specie.scientificName}</em></Paragraph>

        <Paragraph><b>Descripción: </b>{specie.description}</Paragraph>

        <Paragraph><b>Hábitat: </b>{specie.habitat}</Paragraph>

        {specie.size !== 0 && <Paragraph><b>Tamaño: </b>{specie.size} cm</Paragraph>}

        {specie.food && <Paragraph><b>Alimentos: </b>{specie.food}</Paragraph>}

        {specie.state === true && <Paragraph style={{ color: '#ee4213' }}><b>¡Especie en vía de extinción!</b></Paragraph>}

        {specie.mapUrl && <ContainerColumn><Paragraph><b>Ubicación del registro:</b></Paragraph><iframe src={specie.mapUrl} height="450" allowFullScreen loading="lazy" title='Ubicación del registro de la especie' /></ContainerColumn>}

        <ContainerRow style={{ margin: '1rem 0', gap: '1rem' }}>
            {specie.inaturalistUrl && <ContactButton small style={{ backgroundColor: '#83c253', margin: 0 }} href={specie.inaturalistUrl} target='_blank' title='Observación de la especie en iNaturalist'>
                <IconInaturalist /><p style={{ margin: 0 }}>iNaturalist</p>
            </ContactButton>
            }

            <ContactButton small onClick={handleShare} title='Compartir enlace de la especie' style={{ margin: 0 }}>
                <IconShare fill='#f4f4f4' /><p style={{ margin: 0 }}>Compartir</p>
            </ContactButton>

            <ContactButton small style={{ backgroundColor: '#25d366', margin: 0 }} href={`https://api.whatsapp.com/send/?phone&text=%2A${specie.commonName} 😮%2A%0A%0AIngresa%20a%20este%20enlace%20para%20conocer%20mucho%20m%C3%A1s%20acerca%20de%20esta%20especie%3A%0A%0A${urlSpecie}%0A%0AFuera%20de%20Contexto%20💚&app_absent=0`}
                target='_blank' title='Compartir en WhatsApp'>
                <IconWts /><p style={{ margin: 0 }}>WhatsApp</p>
            </ContactButton>
        </ContainerRow>
        <ContainerColumn>
            <QrCode text={urlSpecie} label={"QR | " + specie.commonName} />
        </ContainerColumn>
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