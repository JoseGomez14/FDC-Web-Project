import React from 'react';
import {NavLink} from 'react-router-dom';

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