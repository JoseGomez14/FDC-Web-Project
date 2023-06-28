import React, { useState } from 'react'
import styled from 'styled-components';
import { GridItemGallery, ContainerFloat } from '../../elements/Containers';
import IconClass from '../../elements/IconClass';
import theme from '../../theme';
import Specie from '../about/Specie';

/**
 * Muestra el resumen de una especie dado el objeto que contiene su información
 * 
 * @param {*} specie información de la especie a mostrar
 * @returns retorna el resumen de una especie en específico y la forma de ver más información de la misma
 */
const ItemGallery = ({ specie }) => {
    const [popUpState, setPopUpState] = useState(false);

    return (
        <GridItemGallery position={specie.imgPosition}>
            <figure onClick={() => setPopUpState(true)}>
                <img src={specie.images[0]} alt={specie.commonName}loading='lazy'></img>

                <Article onClick={() => setPopUpState(true)} className='specieInfo'>
                    <aside>
                        <h1>{specie.commonName}</h1>
                        <p><i>{specie.scientificName}</i></p>
                    </aside>
                    <IconClass className={specie.className} height='2.375rem' width='2.375rem' fill='#f4f4f4' />
                </Article>
            </figure>

            {popUpState &&
                <ContainerFloat>
                    <Specie specie={specie} setPopUpState={setPopUpState} />
                </ContainerFloat>
            }
        </GridItemGallery>
    );
}

const Article = styled.article`
    padding: 0.5rem 1rem;
    color: ${theme.veryLightGray};
    text-shadow: 0px 0px 3px ${theme.mostlyBlack};
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    position: relative;
    bottom: 5rem;
    height: 5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    aside{
        width: 80%;
        white-space: nowrap;
    }

    h1{
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 1.25rem;
        font-weight: 500;
        line-height: 1.5rem;
    }

    p{
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 0.9rem;
    }
`

export default ItemGallery;