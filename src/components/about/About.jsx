import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import useGetSpecie from '../../hooks/useGetSpecie';
import { ContainerColumn } from '../../elements/Containers';
import Spinner from '../../elements/Spinner';
import Specie from './Specie';
import MetaTags from '../main/MetaTags';

/**
 * Componente que permite mostrar a profundidad la información de una especie, es decir,
 * muestra todos los datos y registros multimedia de la especie, según la url consultada.
 * 
 * @returns Retorna la información de la especie consultada
 */
const About = () => {
    const { id } = useParams();
    const [specie, docState] = useGetSpecie(id);

    return (<main style={{ padding: '6rem 0' }}>
        <ContainerColumn>
            {docState === 'load' && <Spinner />}
            {docState === 'empty' && <h1>La especie no se ha encontrado, encuentra otras especies <NavLink to={'/gallery'}>aquí</NavLink></h1>}
        </ContainerColumn>

        {docState === 'exists' &&
            <>
                <Specie specie={specie} id={id} />
                <MetaTags title={specie.commonName + " | Fuera de Contexto"} description={specie.description} image={specie.images[0]}/>
            </>
        }
    </main>
    );
}

export default About;