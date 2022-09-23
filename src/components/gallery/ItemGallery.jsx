import React, { useState } from 'react'
import styled from 'styled-components';
import { GridItemGallery, ContainerFloat } from '../../elements/Containers';
import IconClass from '../../elements/IconClass';
import theme from '../../theme';
import About from '../about/About';

/**
 * Muestra el resumen de una especie dado el objeto que contiene su información
 * 
 * @param {*} specie información de la especie a mostrar
 * @returns retorna el resumen de una especie en específico y la forma de ver más información de la misma
 */
const ItemGallery = ({ specie }) => {
    const [popUpState, setPopUpState] = useState(false)
    return (
        <GridItemGallery>
            <figure onClick={() => setPopUpState(true)}>
                <img src={specie.images[0]} alt={specie.commonName} width='400px'></img>
                <figcaption hidden>{specie.description}</figcaption>
                <Article onClick={() => setPopUpState(true)} className='specieInfo'>
                    <IconClass className={specie.className} height='50px' />
                    <h1>{specie.commonName}</h1>
                    <p><i>{specie.scientificName}</i></p>
                </Article>
            </figure>

            {popUpState &&
                <ContainerFloat>
                    <About
                        idSpecie={specie.id}
                        setPopUpState={setPopUpState}
                    />
                </ContainerFloat>
            }
        </GridItemGallery>
    );
}

const Article = styled.article`
    padding-left: 1rem;
    cursor: pointer;
    color: ${theme.veryLightGray};
    text-shadow: 1px 1px 2px ${theme.mostlyBlack};
    h1{
        font-size: 1rem;
    }
    p{
        font-size: 0.9rem;
    }
`

export default ItemGallery;