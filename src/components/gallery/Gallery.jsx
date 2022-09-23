import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import useGetSpecies from '../../hooks/useGetSpecies';
import ItemGallery from './ItemGallery';
import Search from './Search';
import { Container, ContainerColumn, ContainerGallery } from '../../elements/Containers';
import { H2 } from '../../elements/Titles';

/**
 * Muestra todas las especies disponibles, además integra una barra de búsqueda por nombre
 * y un sistema de filtración por características de las especies
 * 
 * @returns un resumen de cada especie registrada en la base de datos
 */
const Gallery = () => {
    const [loadState, setLoadState] = useState(true);
    const [species, empty] = useGetSpecies();
    const [searchState, setSearchState] = useState(false);
    const [filterSpecies, setFilterSpecies] = useState([])

    useEffect(() => {
        if (species.length > 0 || empty) {
            setLoadState(false)
        }
    }, [empty, species])

    return (
        <Container style={{paddingTop: '5rem'}}>
            <ContainerColumn style={{alignItems: 'start'}}>
                <H2>Galleria</H2>
                {loadState &&
                    <h2>Cargando...</h2>
                }

                {!loadState && !empty &&
                    <Search
                        setSearchState={setSearchState}
                        setFilterSpecies={setFilterSpecies}
                        species={species}
                    />
                }

                <ContainerGallery>
                    {!searchState ?
                        species.map((specie, index) => {
                            return <ItemGallery key={'specie-main' + index}
                                specie={specie}
                            />
                        })
                        :
                        filterSpecies.map((specie, index) => {
                            return <ItemGallery key={'specie-main' + index}
                                specie={specie}
                            />
                        })
                    }
                </ContainerGallery>

                {searchState && filterSpecies.length === 0 &&
                    <h2>¡Vaya! No hay especies registradas con las características seleccionadas.</h2>
                }

                {empty &&
                    <article>
                        <h2>¡Vaya! No hay especies registradas por el momento.</h2>
                        <p>Pero puedes conocer más acerca de <em>Fuera de Contexto</em> <NavLink to={'/'}>!aquí¡</NavLink></p>
                    </article>
                }
            </ContainerColumn>
        </Container>
    );
}

export default Gallery;