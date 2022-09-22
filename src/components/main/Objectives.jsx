import React from 'react'
import { Container, ContainerColumn } from '../../elements/Containers';
import { List, ListItem } from '../../elements/Lists';
import { H2 } from '../../elements/Titles';

/**
 * Componente encargado de mostrar el listado de objetivos del grupo
 * @param {*} id id del contenido 
 * @returns sección de lista de objetivos
 */
const Objetives = ({ id }) => {
    return (<Container id={id}>
        <ContainerColumn>
            <aside>
                <H2>Objetivos</H2>
                <List>
                    <ListItem
                        title='Objetivo General'
                        description='Caracterizar la riqueza faunística del municipio de Santo Domingo (Antioquia) mediante salidas de campo y análisis de información secundaria.'>
                    </ListItem>

                    <ListItem
                        title='1. Objetivo Específico'
                        description='Analizar la información secundaria disponible de las especies de fauna del municipio de Santo Domingo mediante búsqueda en bases de datos, catálogos de especies y encuestas a la comunidad.'>
                    </ListItem>

                    <ListItem
                        title='2. Objetivo Específico'
                        description='Identificar las especies de fauna del municipio de Santo Domingo, Antioquia mediante salidas de campo.'>
                    </ListItem>

                    <ListItem
                        title='3. Objetivo Específico'
                        description='Diseñar un catálogo de las especies de fauna del municipio de Santo Domingo.'>
                    </ListItem>
                </List>
            </aside>
        </ContainerColumn>
    </Container>);
}

export default Objetives;