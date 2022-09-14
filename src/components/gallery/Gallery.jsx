import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import useGetSpecies from '../../hooks/useGetSpecies'
import ItemGallery from './ItemGallery'
import Search from './Search';

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
        <section>
            <h1>Galleria</h1>

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

            {!searchState?
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

            {searchState && filterSpecies.length === 0 &&
                <h2>¡Vaya! No hay especies registradas con las características seleccionadas.</h2>
            }

            {empty &&
                <article>
                    <h2>¡Vaya! No hay especies registradas por el momento.</h2>
                    <p>Pero no es impedimento para que conozcas más acerca de <em>Fuera de Contexto</em> <NavLink to={'/'}>!aquí¡</NavLink></p>
                </article>
            }
        </section>
    );
}

export default Gallery;