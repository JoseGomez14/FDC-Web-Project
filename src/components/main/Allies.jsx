import { Container, ContainerColumn, ContainerGrid, GridItem } from "../../elements/Containers";
import { H2 } from '../../elements/Titles';
import Paragraph from "../../elements/Paragraph";
import LogoIETITC from '../../images/logoIETITC.png';
import LogoOndas from '../../images/logoOndas.png';
import LogoCornare from '../../images/logoCornare.png';
import LogoMinciencias from '../../images/logoMinCiencias.png';
import LogoMinAmbiente from '../../images/logoMinAmbiente.png';
import LogoHatovial from '../../images/logoHatovial.png';
import LogoVinus from '../../images/logoVinus.png';
import LogoProdepaz from '../../images/logoProdepaz.png';
import LogoStoDgo from '../../images/logoStoDgo.png';
import styled from "styled-components";

/**
 * Componente encargado de mostrar las entidades que apoyan o están relacionadas con el grupo de investigación
 * @param {*} id id del contenido 
 * @returns sección de contenido con las entidades aliadas al grupo FDC
 */
const Allies = ({ id }) => {
    return (<Container dark id={id}>
        <ContainerColumn>
            <aside>
                <H2 light>Aliados</H2>

                <Paragraph light>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere perferendis a autem similique quidem, voluptate magni! Dolorem cum, illum numquam incidunt ipsam quae? Eaque et quis earum cupiditate, mollitia veritatis?</Paragraph>
            </aside>
            <aside>
                <ContainerGrid>
                    <GridItem>
                        <Img src={LogoIETITC} alt="" />
                    </GridItem>
                    <GridItem large>
                        <Img src={LogoOndas} alt="" />
                    </GridItem>
                    <GridItem>
                        <Img src={LogoCornare} alt="" />
                    </GridItem>
                    <GridItem>
                        <Img src={LogoStoDgo} alt="" />
                    </GridItem>
                    <GridItem large>
                        <Img src={LogoMinciencias} alt="" />
                    </GridItem>
                    <GridItem large>
                        <Img src={LogoMinAmbiente} alt="" />
                    </GridItem>
                    <GridItem large>
                        <Img src={LogoHatovial} alt="" />
                    </GridItem>
                    <GridItem large>
                        <Img src={LogoVinus} alt="" />
                    </GridItem>
                    <GridItem>
                        <Img src={LogoProdepaz} alt="" />
                    </GridItem>
                </ContainerGrid>
            </aside>
        </ContainerColumn>
    </Container>);
}

/**
 * Imagen estilizada para el logo de cada entidad
 */
const Img = styled.img`
    max-width: 100%;
    max-height: 100%;
`

export default Allies;