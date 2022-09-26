import React from 'react'
import { useParams, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Contact from '../main/Contacts';
import { Container, ContainerColumn, ContainerSlider } from '../../elements/Containers';
import { H2 } from '../../elements/Titles'
import Paragraph from '../../elements/Paragraph'
import useGetSpecie from '../../hooks/useGetSpecie';
import { BackButton } from '../../elements/Buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Spinner from '../../elements/Spinner';
import Slider from '../../elements/Slider';

/**
 * Componente que permite mostrar a profundidad la información de una especie, es decir,
 * muestra todos los datos y registros multimedia de la especie.
 * 
 * Funciona como componente en "gallery" si se pasan los parámetros y como ruta dinámica
 * si se consulta desde el navegador con un id de especie válido
 * 
 * @param {string} idSpecie identificador de la especie búscada
 * @param {*} setPopUpState función que permite modificar el estado de ventana
 * @returns Retorna la información de la especie consultada
 */
const About = ({ idSpecie, setPopUpState }) => {
    const { id } = useParams();
    const [specie, docState] = useGetSpecie(idSpecie || id);
    const urlSpecie = document.location.origin + '/about/' + (idSpecie || id);

    return (<>
        <Container>
            {setPopUpState && <BackButton onClick={() => setPopUpState(false)} title='Volver a la gallería'><FontAwesomeIcon icon={faArrowLeft} /></BackButton>}
            <ContainerColumn>

                {docState === 'load' && <Spinner />}
                {docState === 'empty' && <h1>La especie no se ha encontrado, encuentra otras especies <NavLink to={'/gallery'}>aquí</NavLink></h1>}
                {docState === 'exists' &&
                    <Article>
                        <H2 title='Nombre común'>{specie.commonName}</H2>

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

                        {specie.mapUrl && <iframe src={specie.mapUrl} width="600" height="450" allowfullscreen="" loading="lazy" title='Ubicación del registro de la especie'></iframe>}

                        {specie.inaturalistUrl && <Paragraph><b>Observación en iNaturalist: </b><a href={specie.inaturalistUrl} target='_blank' rel='noreferrer'>{specie.inaturalistUrl}</a></Paragraph>}

                        <Paragraph><b>Compartir especie: </b><a href={urlSpecie} target='_blank' rel='noreferrer'>{urlSpecie}</a></Paragraph>
                    </Article>
                }
            </ContainerColumn>
        </Container>
        {!setPopUpState && <Contact/>}
    </>
    );
}

const Article = styled.article`
    p{
        margin: 10px;
    }
`

const Audio = styled.audio`
    &::-webkit-media-controls-play-button, &::-webkit-media-controls-panel{
        background-color: #bbe29e;
    }
    background-color: #bbe29e;
    border-radius: 2rem;
`

export default About;