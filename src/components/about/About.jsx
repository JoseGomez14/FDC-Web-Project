import React from 'react'
import {useParams, NavLink} from 'react-router-dom';
import useGetSpecie from '../../hooks/useGetSpecie';

/**
 * Componente que permite mostrar a profundidad la información de una especie, es decir,
 * muestra todos los datos y registros multimedia de la especie.
 * 
 * Funciona como componente en "gallery" si se pasan los parámetros y como ruta dinámica
 * si se consulta desde el navegador con un id de especie válido
 * 
 * @param {string} idSpecie identificador de la especie búscada
 * @param {*} setPopUpState función que permite modificar el estado de ventana
 * @returns Retorna la información de la especie consultada
 */
const About = ({idSpecie, setPopUpState}) => {
    const {id} = useParams();
    const [specie, docState] = useGetSpecie(idSpecie || id);
    
    return (
        <section>
            {setPopUpState && <button onClick={() => setPopUpState(false)}>Volver a la galleria</button>}

            {docState === 'load' && <h1>Cargando...</h1>}
            {docState === 'empty' && <h1>La especie no se ha encontrado, encuentra otras especies <NavLink to={'/gallery'}>aquí</NavLink></h1>}
            {docState === 'exists' ?
                <article>
                    <h1 title='Nombre comùn'>{specie.commonName}</h1>
                    <p title='Nombre científico'>{specie.scientificName}</p>
                    {specie.images.map((image, index)=>{
                        return <figure key={'image-' + index}>
                            <img src={image} alt={specie.commonName} width='400px'></img>
                        </figure>
                    })}
                    {specie.sound !== '' && <div>
                        <h3>Sonido de la especie</h3>
                        <audio src={specie.sound} controls></audio>
                        {specie.srcSound && <p><b>Sonido tomado de: </b>{specie.srcSound}</p>}
                    </div>}
                    {specie.description  && <p><b>Descripción: </b>{specie.description}</p>}
                    {specie.genus        && <p><b>Género: </b>{specie.genus}</p>}
                    <p><b>Clase: </b>{specie.className}</p>
                    <p><b>Hábitat: </b>{specie.habitat}</p>
                    {specie.size !== 0     && <p><b>Tamaño: </b>{specie.size} cm</p>}
                    {specie.food           && <p><b>Alimentos: </b>{specie.food}</p>}
                    {specie.skinColor      && <p><b>Color del pelaje: </b>{specie.skinColor}</p>}
                    {specie.state === true && <p><b>¡Especie en vía de extinción!</b></p>}
                    {specie.mapUrl         && <iframe src={specie.mapUrl} width="600" height="450" allowfullscreen="" loading="lazy" title='Ubicación del registro de la especie'></iframe>}
                    {specie.inaturalistUrl && <p><b>Observación en iNaturalist: </b><a href={specie.inaturalistUrl} target='_blank' rel='noreferrer'>{specie.inaturalistUrl}</a></p>}
                </article>
                :<h2>Se ha encontrado la especie, lastimosamente a un no tenemos registro de su maravilloso sonido :(</h2>
            }
        </section>
    );
}
 
export default About;