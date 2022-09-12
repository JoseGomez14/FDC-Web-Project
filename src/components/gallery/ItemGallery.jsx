import React,  { useState } from 'react'
import About from '../about/About';

const ItemGallery = ({specie}) => {
    const [popUpState, setPopUpState] = useState(false)
    return ( 
        <article>
            <h1>{specie.commonName}</h1>

            <figure>
                <img src={specie.images[0]} alt={specie.commonName} width='400px'></img>
                <figcaption>{specie.description}</figcaption>
            </figure>

            {specie.description && <p><b>Descripción: </b>{specie.description}</p>}

            <button onClick={() => setPopUpState(true)}>Acerca de {specie.commonName}</button>

            {popUpState &&
                <About 
                    idSpecie={specie.id}
                    setPopUpState={setPopUpState}
                />
            }
        </article>
     );
}
 
export default ItemGallery;