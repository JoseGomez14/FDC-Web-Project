import React, { useState } from 'react'
import styled from 'styled-components';
import { ContactButton, Button } from '../../elements/Buttons';
import { Container, ContainerColumn, ContainerRow } from '../../elements/Containers';
import Paragraph from '../../elements/Paragraph';
import { H2 } from '../../elements/Titles';
import IconFacebook from '../../assets/images/IconFacebook';
import IconInstagram from '../../assets/images/IconInstagram';
import IconInaturalist from '../../assets/images/IconInaturalist';
import IconWts from '../../assets/images/IconWts';
import { ContactForm, ContactInput, ContactTextArea } from '../../elements/ContactForm';

/**
 * Componente encargado de mostrar información para exhibir las redes sociales y formas de contacto del grupó FDC
 * @param {*} id id del contenido 
 * @returns sección de contenido redes sociales y formulario de contacto
 */
const Contacts = ({ id }) => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
    }

    const [emailInfo, setEmailInfo] = useState({})

    return (<Container dark id={id}>
        <ContainerColumn>
            <aside>
                <H2 light>Contactos</H2>
            </aside>
            <aside>
                <ContainerRow alignStart>
                    <aside>
                        <Paragraph light>¡Visita nuestras redes sociales!</Paragraph>
                        <AsideLeft>
                            <ContactButton href='https://www.facebook.com/fuera.decontexto.9480' target='_blank'>
                                <IconFacebook />
                                <p>Fuera de Contexto</p>
                            </ContactButton>
                            <ContactButton href='https://instagram.com/fuera_decontexto_?igshid=zb0ozoqp670x' target='_blank'>
                                <IconInstagram />
                                <p>fuera_decontexto_</p>
                            </ContactButton>
                            <ContactButton href='https://www.inaturalist.org/people/fueradecontexto' target='_blank'>
                                <IconInaturalist />
                                <p>fueradecontexto</p>
                            </ContactButton>
                            <ContactButton href='https://api.whatsapp.com/send?phone=573016857721&text=%C2%A1Fuera%20de%20Contexto!%F0%9F%A4%97' target='_blank'>
                                <IconWts />
                                <p>+57 301 685 7721</p>
                            </ContactButton>
                        </AsideLeft>
                    </aside>

                    <aside>
                        <Paragraph light>!Escríbenos un correo!</Paragraph>
                        <ContactForm onSubmit={handleSubmit}>
                            <ContactInput type="text" placeholder='Asunto' value={emailInfo.subjet} onChange={(evt) => setEmailInfo({ ...emailInfo, subjet: evt.target.value })} />
                            <ContactTextArea name="" id="" cols="30" rows="10" placeholder='Mensaje' value={emailInfo.body} onChange={(evt) => setEmailInfo({ ...emailInfo, body: evt.target.value })}></ContactTextArea>
                            <Button small as={A} href={`mailto:fueradecontextopyt@gmail.com?subject=${emailInfo.subjet}&body=${emailInfo.body}`} target="_blank"><p>Enviar</p></Button>
                        </ContactForm>
                    </aside>
                </ContainerRow>
            </aside>
        </ContainerColumn>
    </Container>);
}

/**
 * Elemento encargado de distribuir los elementos de las redes sociales y de poner
 * la linea divisora en dispositivos de tamaño mediano en adelante
 * 
 * Media Queries: 1000px, 900px
 */
const AsideLeft = styled.aside`
    position: relative;
    display: flex;
    flex-direction: column;

    &::before{
        background-color: #F4F4F4;
        content: "";
        height: 100%;
        width: 3px;
        position: absolute;
        right: 5%;
    }

    @media (max-width: 1000px){
        margin-bottom: 2rem;
        &::before{
            height: 0;
        }
    }

    @media (max-width: 900px) {
        align-items: center;
    }
`

const A = styled.a`
    text-align: center;
    text-decoration: none;
`

export default Contacts;