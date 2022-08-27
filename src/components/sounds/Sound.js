import React from 'react'
import {useParams} from 'react-router-dom';

const Sound = () => {
    const {id} = useParams();
    return ( 
        <article>
            <h1>Sonido {id}</h1>
        </article>
     );
}
 
export default Sound;