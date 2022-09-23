import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../theme';
import { MenuButton } from '../elements/Buttons';
import IconFDC from '../images/IconFDC';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTasks, faTimeline, faUsers, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-regular-svg-icons';

/**
 * Este componente contiene el HTML del Navbar
 * @returns Retorna el Navbar de la página
 */
const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    window.onscroll = function () {
        if (document.documentElement.scrollTop > 100) {
            document.getElementById('dinamicNavbar').classList.remove('light');
            document.getElementById('dinaNav').classList.remove('light');
            document.getElementById('navHeader').classList.remove('light');
        } else {
            document.getElementById('dinamicNavbar').classList.add('light');
            document.getElementById('dinaNav').classList.add('light');
            document.getElementById('navHeader').classList.add('light');
        }
    }

    return (
        <Header>
            <HeaderWrapper id='navHeader' className='light'>
                <div>
                    <NavLink to={'/'} id='dinamicNavbar' className='light'>
                        <IconFDC fill='#F4F4F4' height='2rem' style={{ marginTop: '0.3rem' }} id='mainIcon' />
                    </NavLink>
                </div>
                <div id='dinaNav'  className='light'>
                    <NavbarWrapper open={open}>
                        <ul>
                            <li><a href='/#home' onClick={handleClick}>
                                <FWIcon icon={faHome} /> Inicio
                            </a>
                            </li>
                            <li>
                                <a href='/#about-us' onClick={handleClick}>
                                    <FWIcon icon={faUsers} /> Nosotros
                                </a>
                            </li>
                            <li>
                                <a href='/#productions' onClick={handleClick}>
                                    <FWIcon icon={faImages} /> Producciones
                                </a>
                            </li>
                            <li>
                                <a href='/#objectives' onClick={handleClick}>
                                    <FWIcon icon={faTasks} /> Objetivos
                                </a>
                            </li>
                            <li>
                                <a href='/#history' onClick={handleClick}>
                                    <FWIcon icon={faTimeline} /> Historia
                                </a>
                            </li>
                            <li>
                                <a href='/#allies' onClick={handleClick}>
                                    <FWIcon icon={faUsers} /> Aliados
                                </a>
                            </li>
                            <li>
                                <a href='/#contact' onClick={handleClick}>
                                    <FWIcon icon={faAddressBook} /> Contactos
                                </a>
                            </li>
                        </ul>
                    </NavbarWrapper>
                </div>
                <div className='menuButton'>
                    <MenuButton open={open} handleClick={handleClick}/>
                </div>
            </HeaderWrapper>
        </Header>
    );
}

/**
 * Contenedor de la barra y el menú
 */
 const Header = styled.header`
    header{
        background-color: ${theme.darkCyan};
        transition: all 0.3s ease-in-out;
    }

    .light{
        background-color: rgba(0, 0, 0, 0.1);

    #hamburguerIcon{
        svg{fill: ${theme.veryDarkCyan}}
    }
 }
`

/**
 * Navbar estilizado - lista los elementos según el tamaño de la pantalla,
 * ya sea en menú de hamburguesa o como lista en la misma barra (Para pantallas grandes)
 * Media Query: 1450px
 */
const NavbarWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: ${theme.veryDarkCyan};
    position: fixed;
    top: 3.5rem;
    padding: 0;
    z-index: 9;
    right: ${props => (props.open ? "0" : "-100%")};
    width: fit-content;
    height: 100vh;
    transition: all 0.3s ease-in-out;

    ul{
        list-style-type: none;
        text-align: center;
    }

    li{
        margin: 2rem 3rem;
    }

    a{
        font-size: 1.125rem;
        font-weight: 500;
        text-decoration: none;
        color: ${theme.veryLightGray};
        padding: 0.5rem 1rem;
        border-radius: 1.5rem;
        transition: all 0.4s, 0.4s ease-in;

        &:hover{
            color: ${theme.mostlyBlack};
            background-color: ${theme.veryLightGray};
        }
        
    }

    @media (min-width: 1450px) {
        display: block;
        position: initial;
        padding-top: 0;
        height: auto;
        background: transparent;
        li{
            display: inline;
            margin: 0 0 0 0.375rem;
        }
    }
`;

/**
 * Header estlizado - Para ubicar la barra y el logo en la posición adecuada
 * Además de los padding que debe tener según el tamaño de la pantalla y permite
 * mostrar u ocultar el menú
 * 
 * Media Queries: 1450px, 768px
 */
const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: 3.5rem;
    padding: 0.5rem 10%;
    padding-right: 5%;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .menuButton{
        display: none;
        z-index: 20;
    }

    .light{
        background-color: transparent;
        #mainIcon{
            fill: ${theme.veryDarkCyan};
        }

        nav{
            top: 0;
            padding-top: 3.5rem;
        }
        
        @media (min-width: 1450px) {
            a{
                color: ${theme.veryDarkCyan};
            }
            nav{
                top: 3.5rem;
                padding-top: 0;
            }
        }
        
    }

    @media (max-width: 1450px) {
        .menuButton{display: block;}
    }

    @media (max-width: 768px) {padding: 0.5rem 5%;}
`

/**
 * Icono FontAwasome estilizado - Para aplicar una separación entre el icono y el texto siguiente
 */
const FWIcon = styled(FontAwesomeIcon)`
    font-size: 1.2rem;
    margin: 0 0.2rem 0.05rem 0;
`

export default Navbar;