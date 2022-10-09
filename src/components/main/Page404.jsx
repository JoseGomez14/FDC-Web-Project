import React from 'react';
import MetaTags from './MetaTags'
import { ReactComponent as NotFoundIcon } from '../../assets/images/notFound.svg'
import { NavLink } from 'react-router-dom';
import { Container, ContainerColumn } from '../../elements/Containers';
import Paragraph from '../../elements/Paragraph';

const Page404 = () => {
    return (<>
        <MetaTags title={'Fuera de Contexto | Error 404!'} />
        <Container>
            <ContainerColumn>
                <h1 style={{ color: '#00BFA6', fontSize: '4rem' }}>¡Error 404!</h1>
                <Paragraph><b>La página que buscas no se encuentra en esta URL</b></Paragraph>
                <NotFoundIcon style={{ maxHeight: '50vh', maxWidth: '90vw' }} /><br/>
                <NavLink to={'/'}><Paragraph>Ir al sitio principal</Paragraph></NavLink>
            </ContainerColumn>

        </Container>
    </>);
}

export default Page404;