import React from 'react'
import ImageGallery from './ImageGallery';
import photo from '../../images/photo.jpg'

const infoImages = [
    {
        urlImage: photo,
        caption: "Una imagen",
        id: 1
    },   
    {
        urlImage: photo,
        caption: "Una imagen 2",
        id: 2
    }
]

const Gallery = () => {
    return ( 
        <section>
            <h1>Galleria</h1>
            {infoImages.map(image => {
                return <ImageGallery key={image.id} infoSpecies={image}/>
            })}
        </section>
     );
}
 
export default Gallery;