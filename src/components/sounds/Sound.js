import React from 'react'
import {useParams} from 'react-router-dom';

const Sound = () => {
    const {id} = useParams();
    return ( 
        <article>
            <h1>Sonido {id}</h1>
            {/* Obtener audio e imagen de firebase storage */}
            <p>Espacio para poner el audio y la info de la especie</p>
        </article>
     );
}
 
export default Sound;