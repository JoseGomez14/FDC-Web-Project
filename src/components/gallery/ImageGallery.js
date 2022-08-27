import React from 'react'
import { NavLink } from 'react-router-dom';

const ImageGallery = ({infoSpecies}) => {
    return ( 
        <div>
            <figure>
                <img src={infoSpecies.urlImage} alt={infoSpecies.caption}></img>
                <figcaption>{infoSpecies.caption}</figcaption>
            </figure>
            <NavLink to={`/sounds/${infoSpecies.id}`}>Sonido {infoSpecies.caption}</NavLink>
        </div>
     );
}
 
export default ImageGallery;