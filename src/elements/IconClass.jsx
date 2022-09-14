import React from 'react';
import { ReactComponent as IconPlants } from '../images/plants.svg';
import { ReactComponent as IconBird } from '../images/bird.svg';
import { ReactComponent as IconBear } from '../images/bear.svg';
import { ReactComponent as IconFungi } from '../images/fungi.svg';
import { ReactComponent as IconSpdier } from '../images/spider.svg';
import { ReactComponent as IconFrog } from '../images/frog.svg';
import { ReactComponent as IconSnake} from '../images/snake.svg';

/**
 * Permite incorporar un icono dada la clase a la que pertenece la especie
 */
const IconClass = ({className, height}) => {
    switch (className) {
        case 'aves':
            return <IconBird height={height} title="Aves"/>
        case 'mamiferos':
            return <IconBear height={height} title="Mamíferos"/>
        case 'reptiles':
            return <IconSnake height={height} title="Reptiles"/>
        case 'anfibios':
            return <IconFrog height={height} title="Anfibios"/>
        case 'insectos':
            return <IconSpdier height={height} title="Insectos"/>
        case 'plantas':
            return <IconPlants height={height} title="Plantas"/>
        case 'hongos':
            return <IconFungi height={height} title="Hongos"/>
        
        default:
            break;
    }
}
 
export default IconClass;