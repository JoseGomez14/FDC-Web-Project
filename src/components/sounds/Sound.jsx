import React from 'react'
import {useParams, NavLink} from 'react-router-dom';
import useGetSpecie from '../../hooks/useGetSpecie';

const Sound = () => {
    const {id} = useParams();
    const [specie, docState] = useGetSpecie(id);


    return (
        <section>
            <NavLink to={'/gallery'}>Volver a la galleria</NavLink>

            {docState === 'load' && <h1>Cargando...</h1>}
            {docState === 'empty' && <h1>La especie no se ha encontrado, encuentra otras especies <NavLink to={'/gallery'}>aquí</NavLink></h1>}
            {docState === 'exists' &&
                <article>
                    <h1>{specie.commonName}</h1>
                    <p>Id de especie: {id}</p>
                    {specie.sound !== ''?
                    <audio src={specie.sound} controls></audio>
                    :<h2>Se ha encontrado la especie, lastimosamente a un no tenemos registro de su maravilloso sonido :(</h2>}
                </article>
            }
        </section>
    );
}
 
export default Sound;