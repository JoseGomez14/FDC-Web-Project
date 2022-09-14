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
            {docState === 'exists' &&
                <article>
                    <h1>{specie.commonName}</h1>
                    {specie.sound !== ''?
                    <audio src={specie.sound} controls></audio>
                    :<h2>Se ha encontrado la especie, lastimosamente a un no tenemos registro de su maravilloso sonido :(</h2>}
                </article>
            }
        </section>
    );
}
 
export default About;