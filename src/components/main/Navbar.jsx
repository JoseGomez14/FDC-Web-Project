import React from 'react';
import {NavLink} from 'react-router-dom';

/**
 * Este componente contiene el HTML del Navbar
 * @returns Retorna el Navbar de la página
 */
const Navbar = () => {
    return ( 
        <nav>
            <ul>
                <li>
                    <NavLink to={'/'}>
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/gallery'}>
                        Galleria
                    </NavLink>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;