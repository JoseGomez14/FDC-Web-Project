import React from 'react';
import styled from "styled-components";
import Point from '../images/Point';
import Paragraph from './Paragraph';

/**
 * Lista desordenada estilizada - Lista de elementos con viñeta SVG
 * Estilos: onlyTitle o full
 */
const List = styled.ul`
    list-style: none;

    li{
        margin-bottom: ${(props) => props.onlyTitle ? '1rem' : '2.5rem'};
        svg{
            margin-right: 1rem;
        }
        
        a{
            text-decoration: none;
        }
    }
`

/**
 * Item de lista
 * 
 * @param {*} title título o primera linea del item de lista
 * @param {*} description descripción del item
 * @param {*} href hipervinculo del item
 * @returns retorna elemento `li` que contine la información pasada como páramatero,
 * lo estiliza y ajusta según los párametros
 */
const ListItem = ({ title, description, href }) => {
    return (<li>
        {!href &&
            <div>
                <Paragraph style={{ fontWeight: '600', fontSize: '1.375rem' }}><Point width='1rem' />{title}</Paragraph>
                <Paragraph style={{ marginLeft: '2rem' }}>{description}</Paragraph>
            </div>}
        {href && <a href={href}><Paragraph style={{ fontWeight: '600', fontSize: '1.375rem' }}><Point width='1rem' />{title}</Paragraph></a>}
    </li>);
}

export default ListItem;


export { List, ListItem };