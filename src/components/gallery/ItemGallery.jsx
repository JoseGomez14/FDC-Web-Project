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
                <img src={specie.images[0]} alt={specie.commonName} width='400px' loading='lazy'></img>
                <figcaption hidden>{specie.description}</figcaption>

                <Article onClick={() => setPopUpState(true)} className='specieInfo'>
                    <aside>
                        <h1>{specie.commonName}</h1>
                        <p><i>{specie.scientificName}</i></p>
                    </aside>
                    <IconClass className={specie.className} height='2.375rem' width='2.375rem' fill='#f4f4f4'/>
                </Article>
            </figure>

            {popUpState &&
                <ContainerFloat>
                    <About idSpecie={specie.id} setPopUpState={setPopUpState}/>
                </ContainerFloat>
            }
        </GridItemGallery>
    );
}

const Article = styled.article`
    padding: 0 1rem;
    cursor: pointer;
    color: ${theme.veryLightGray};
    text-shadow: 0px 0px 3px ${theme.mostlyBlack};
    position: relative;
    bottom: 3.5rem;
    display: flex;
    justify-content: space-between;
    h1{
        font-size: 1.25rem;
        font-weight: 500;
        line-height: 1.5rem;
    }
    p{
        font-size: 0.9rem;
    }
`

export default ItemGallery;