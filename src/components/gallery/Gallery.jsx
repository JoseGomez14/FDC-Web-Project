import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import useGetSpecies from '../../hooks/useGetSpecies'

const Gallery = () => {
    const [loadState, setLoadState] = useState(true);
    const [species, getMoreSpecies, moreToLoad, empty] = useGetSpecies();

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

            {species.map((specie, index) => {
                return <article key={'species-main' + index}>
                    <h2>{specie.commonName}</h2>
                    {specie.sound !== ''&&
                    <NavLink to={`/sound/${specie.id}`}>Sonido</NavLink>}
                </article>
            })
            }

            {moreToLoad &&
                <button onClick={() => getMoreSpecies()}>Cargar Más</button>
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